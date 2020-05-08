import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './components/Home';
import Stocks from './components/Stocks';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink to="/">Home |</NavLink>
            </li>
            <li>
              <NavLink to="/Stocks">Stocks</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Stocks" component={Stocks} />
          </div>
        </div>
      </HashRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
