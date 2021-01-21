import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/Intro/Intro';
import React from 'react';
import Bar from './components/Bar/Bar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" render={() => <Intro />} />
        <Route exact path="/bar-com-os-migos" render={() => <Bar />} />
      </Router>
    </>
  );
}

export default App;
