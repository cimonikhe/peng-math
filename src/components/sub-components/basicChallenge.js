import Popup from '../sub-components/scoreBoard'
import React, {useState, useEffect} from 'react';



function BasicChallenge(choice, correctAns) {
const [total,setTotal] = useState(0);
let newTotal = total;
        
   if(choice === correctAns){
    newTotal++;
    setTotal(newTotal);
     // alert('You got it!');
     return newTotal
   };
  
// alert('Sorry, you chose  ' + choice + '  but the answer is  ' + correctAns);
   
    return correctAns


}


export default BasicChallenge;
