import React from 'react';
import {questions} from '../../reducers/questionDb';
import Question from '../sub-components/question';
import Quiz from '../sub-components/quiz';
import './styles/question-page.css';
import {CloseButton} from 'react-bootstrap';
//stateful component
 class QuestionsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          input: 0
        };
    }

    handleChange = (event) =>{
      this.setState({
        input: event.target.value
      });
    }

    render(){
 
        //let randomSelection = this.createQuestions(questions, parseInt(numberOfQuestions, 10));
        //let questionComponents = this.displayQuestions(randomSelection);
        return(
            <div className="questions-container">
                <p>Questions Page</p>  
                <input
                  type='number'
                  value={this.state.input}
                  onChange={this.handleChange} 
                  min="0"
                  max={questions.length}
                  />
                 <Quiz numQuestions={this.state.input}/>
            </div>
        );
    }

}
/*
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
          <QuestionsPage/>
        </div>
        
      );
      
    }
    
  };
  */
// export default QuestionsPage;
export default QuestionsPage;
