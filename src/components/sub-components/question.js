import React, {useState} from 'react';
import BasicChallenge from '../sub-components/basicChallenge'
import './styles/question.css'

function Question(props) {

  
  const [total,setTotal] = useState(0);

  const checkAnswer = (choice, correctAns) =>{
  let newTotal = total;
        
   if(choice === correctAns){
      newTotal++;
      props.scoreUpdated(true,props.question.title);
      setTotal(newTotal);
      return newTotal;
   }
   else{
    props.scoreUpdated(false,props.question.title);
   }

   
    return correctAns;
    
  }
    
  return (
    <div className="single-question">  

      <p>{props.question.title}</p>
      <div className='choices-container'>
        <div>
          <input type="radio" value="A:" name={props.name} onClick={() => checkAnswer('A', props.question.answer)} id={props.question.options.a}/> 
          <label htmlFor={props.question.options.a}>{props.question.options.a}</label>
        </div>
        <div>
          <input type="radio" value="B:" name={props.name} onClick={() => checkAnswer('B', props.question.answer)} id={props.question.options.b}/>
          <label htmlFor={props.question.options.b}>{props.question.options.b} </label>
        </div>
        <div>
          <input type="radio" value="C:" name={props.name} onClick={() => checkAnswer('C', props.question.answer)}/> 
          <label>{props.question.options.c}</label> 
        </div>
        <div>
          <input type="radio" value="D:" name={props.name} onClick={() => checkAnswer('D', props.question.answer)}/> 
          <label>{props.question.options.d}</label> 
        </div>
        <div>
          <input type="radio" value="E:" name={props.name} onClick={() => checkAnswer('E', props.question.answer)}/> 
          <label>{props.question.options.e} </label> 
        </div>
      </div>
      <p></p>
      
    </div>
  );
}

export default Question;
