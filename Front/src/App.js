import React from 'react';
import './App.css';
import Logpage from './components/Logpage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Logpage} />
      </Switch>
    </div>
  );
}

export default App;
