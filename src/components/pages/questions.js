import React from 'react';
import {questions} from '../../reducers/questionDb';
import Question from '../sub-components/question';
import './styles/question-page.css';
import {CloseButton} from 'react-bootstrap';
//stateful component
 class QuestionsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        let numberOfQuestions = MyForm.input;
        let randomSelection = this.createQuestions(questions, parseInt(numberOfQuestions, 10));
        let questionComponents = this.displayQuestions(randomSelection);
        return(
            <div className="questions-container">
                <p>Questions Page</p>  
                 {questionComponents}
            </div>
        );
    }
// randomly selects some questions from database to make a new array
    createQuestions = (arr, size) => {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
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

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange} />
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
          {QuestionsPage}
        </div>
        
      );
      
    }
    
  };
// export default QuestionsPage;
export default MyForm;
