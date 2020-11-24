import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import SelectMenu from './component/selectMenu/Container';
import MainView from './component/mainView/Container';
import ResultView from './component/resultView/Container';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={SelectMenu}/>
          <Route exact path="/Main" component={MainView}/>
          <Route exact path="/Main/Result" component={ResultView}/>
      </Router>
    </div>
  );
}

export default App;
