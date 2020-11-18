import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import SelectMenu from './component/selectMenu/Container';
import MainView from './component/mainView/Container';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={SelectMenu}/>
          <Route exact path="/Main" component={MainView}/>
      </Router>
    </div>
  );
}

export default App;
