import React from 'react';
import {questions} from '../../reducers/questionDb';
import Question from '../sub-components/question';
import BasicChallenge from '../sub-components/basicChallenge';
//stateful component
class QuestionsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        let questionComponents = this.displayQuestions(questions);
        return(
            <div>
                <p>Questions Page</p>  
                 {questionComponents}
            </div>
        );
    }

    // display questions on the browser
    displayQuestions = (questionsArray) =>{
        let questionComponents = [];
        for (let i = 0; i < questionsArray.length; i++) {
            const question = questionsArray[i]; 
            const questionComponent = 
            (<Question question = {question}/>);
            questionComponents.push(questionComponent);

        }
        return questionComponents;
    }

}

export default QuestionsPage;
