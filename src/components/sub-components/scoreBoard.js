import React from 'react';  
import './styles/question.css';  
import BasicChallenge from '../sub-components/basicChallenge'
import Button from '@material-ui/core/Button';

class Popup extends React.Component {  
  render() {  
return (    
<div>  
<h1>Can you see me?</h1>  
<button>close me</button>  
</div> 
);  
}  
}  

export default Popup;