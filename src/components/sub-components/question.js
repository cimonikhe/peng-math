import React from 'react';
import BasicChallenge from '../sub-components/basicChallenge'
import './styles/question.css'
function Question(props) {
  

  return (
    <div className="single-question">  

      <p>{props.question.title}</p>
      <div className='choices-container'>
        <div>
          <input type="radio" value="A:" name="challenge1" onClick={() => BasicChallenge('A', props.question.answer)} id={props.question.options.a}/> 
          <label for={props.question.options.a}>{props.question.options.a}</label> 
        </div>
        <div>
          <input type="radio" value="B:" name="challenge1" onClick={() => BasicChallenge('B', props.question.answer)} id={props.question.options.b}/>
          <label for={props.question.options.b}>{props.question.options.b} </label> 
        </div>
        <div>
          <input type="radio" value="C:" name="challenge1" onClick={() => BasicChallenge('C', props.question.answer)}/> 
          <label>{props.question.options.c}</label> 
        </div>
        <div>
          <input type="radio" value="D:" name="challenge1" onClick={() => BasicChallenge('D', props.question.answer)}/> 
          <label>{props.question.options.d}</label> 
        </div>
        <div>
          <input type="radio" value="E:" name="challenge1" onClick={() => BasicChallenge('E', props.question.answer)}/> 
          <label>{props.question.options.e} </label> 
        </div>
      </div>
      <p></p>
      
    </div>
  );
}

export default Question;
