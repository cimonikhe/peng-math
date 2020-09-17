import React from 'react';
import Question from '../sub-components/question';
import {questions} from '../../reducers/questionDb';

function BasicChallenge(choice, correctAns) {

   if(choice === correctAns){
     alert('You got it!');
     return correctAns
   };
  
alert('Sorry, you chose  ' + choice + '  but the answer is  ' + correctAns);
   
    return correctAns


}


export default BasicChallenge;
