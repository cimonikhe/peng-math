function BasicChallenge(choice, correctAns) {

   if(choice === correctAns){
     alert('You got it!');
     return correctAns
   };
  
alert('Sorry, you chose  ' + choice + '  but the answer is  ' + correctAns);
   
    return correctAns


}


export default BasicChallenge;
