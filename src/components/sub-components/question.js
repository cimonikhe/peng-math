import React from 'react';
import BasicChallenge from '../sub-components/basicChallenge'
import Questions from '../pages/questions';
function Question(props) {
  

  return (
    <div>  

      <p>{props.question.title}</p>
      <input type="radio" value="A:" name="challenge1" onClick={() => BasicChallenge('A', props.question.answer)()}/> A: {props.question.options.a} <br></br>
      <input type="radio" value="B:" name="challenge1" onClick={() => BasicChallenge('B', props.question.answer)()}/> B: {props.question.options.b} <br></br>
      <input type="radio" value="C:" name="challenge1" onClick={() => BasicChallenge('C', props.question.answer)()}/> C: {props.question.options.c} <br></br>
      <input type="radio" value="D:" name="challenge1" onClick={() => BasicChallenge('D', props.question.answer)()}/> D: {props.question.options.d} <br></br>
      <input type="radio" value="E:" name="challenge1" onClick={() => BasicChallenge('E', props.question.answer)()}/> E: {props.question.options.e} 
      <p></p>
      
    </div>
  );
}

export default Question;
