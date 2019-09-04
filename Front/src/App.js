import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" Component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
