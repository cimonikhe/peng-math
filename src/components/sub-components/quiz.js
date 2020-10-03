import React, {useState, useEffect} from 'react';
import Question from './question';
import Button from '@material-ui/core/Button';
import {questions} from '../../reducers/questionDb';

function Quiz(props){
    
    const [score,setScore] = useState(0);
    const [questionsArray,setQuestionArray] = useState([]);

    const createQuestions = (arr, size) => {
        let questionsArray = [];
        let randomIndexes = [];
        let pickedIndexes = {};

        while(randomIndexes.length < size){
            const index = Math.floor(Math.random() * arr.length);
            if(pickedIndexes[index] && pickedIndexes[index] !== 0){
                continue;
            }
            else{
                randomIndexes.push(index);
                pickedIndexes[index] = true;
            }
        }

        questionsArray = randomIndexes.map(i => {
            return arr[i];
        });

        return questionsArray;
        /*
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
        */
    }

    const displayQuestions = (questionsArray) =>{
        let questionComponents = [];
        for (let i = 0; i < questionsArray.length; i++) {
            const question = questionsArray[i]; 
            const questionComponent = 
            (<Question name={question.title} key={question.title} question={question}/>);
            questionComponents.push(questionComponent);
        
        }
        return questionComponents;
        
    }

    const calculateScore = () => {
        let newScore = score;
        newScore++;
        setScore(newScore);
    }

    let questionComponents = [];

    useEffect(() => {
        let newQuestionsArray = props.numQuestions ? createQuestions(questions,props.numQuestions) : [];
        setQuestionArray(newQuestionsArray);
    },[props.numQuestions]);
    
    questionComponents = questionsArray.length > 0 ? displayQuestions(questionsArray) : []
    return(
        <div>
            <p>quiz</p>
            {questionComponents}
            <Button variant="contained" color="primary" onClick={(e) => calculateScore()}>
                Submit
            </Button>
            <p>Your Score is: {score}</p>
        </div>
    )
}

//submit button when you click it it will sum up your answers and display the score
//the score is a "state" variable

export default Quiz;