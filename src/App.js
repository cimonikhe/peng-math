import React from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom';
import LandingPage from './components/pages/landing-page';
import QuestionsPage from './components/pages/questions';
import Navbar from './components/sub-components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//comment
function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path="/"  render={(props) => (
          <LandingPage />)
        }/>
      <Route exact path="/questions"  render={(props) => (
        <QuestionsPage />)
      }/>
    </div>
  );
}

export default App;
