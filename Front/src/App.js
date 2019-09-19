import React from 'react';
import './App.css';
import TimeRegPage from './components/TimeRegPage';
import Logpage from './components/Logpage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TimeRegPage} />
        <Route path="/timereg/" component={Logpage} />
      </Switch>
    </div>
  );
}

export default App;
