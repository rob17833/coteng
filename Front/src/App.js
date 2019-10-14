import React from 'react';
import './App.css';
import Logpage from './components/Logpage';
import TimeRegPage from './components/TimeRegPage';
import WorkSheetPage from './components/WorkSheetPage';
import Didier from './components/Didier';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Logpage} />
        <Route path="/timereg" component={TimeRegPage} />
        <Route path="/worksheetpage" component={WorkSheetPage} />
        <Route path="/didier" component={Didier} />
      </Switch>
    </div>
  );
}

export default App;
