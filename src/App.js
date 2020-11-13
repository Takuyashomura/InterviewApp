import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SelectMenu from './component/selectMenu/Container';
import MainView from './component/mainView/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SelectMenu}/>
        <Route path="/main" exact component={MainView}/>
      </Router>
    </div>
  );
}

export default App;
