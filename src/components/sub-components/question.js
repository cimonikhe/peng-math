import React from 'react';
import BasicChallenge from '../sub-components/basicChallenge'

function Question(props) {
  

  return (
    <div onChange = {BasicChallenge()}>  

      <p>{props.question.title}</p>
      <input type="radio" value="A:" name="challenge1" /> A: {props.question.options.a} <br></br>
      <input type="radio" value="B:" name="challenge1" /> B: {props.question.options.b} <br></br>
      <input type="radio" value="C:" name="challenge1" /> C: {props.question.options.c} <br></br>
      <input type="radio" value="D:" name="challenge1" /> D: {props.question.options.d} <br></br>
      <input type="radio" value="E:" name="challenge1" /> E: {props.question.options.e} 
      <p></p>
    </div>
  );
}

export default Question;
