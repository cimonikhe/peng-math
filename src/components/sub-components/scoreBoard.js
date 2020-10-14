import React from 'react';  
import './styles/question.css';  
import BasicChallenge from '../sub-components/basicChallenge'
import Button from '@material-ui/core/Button';

function ScoreBoard(props) {  
  return (    
    <div>
      <div>
        <h1>Can you see me?</h1>  
        <button>close me</button> 
      </div>
    </div> 
    );  
 
}  

export default ScoreBoard;