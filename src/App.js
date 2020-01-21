import React from 'react';


import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faShare , faComment , faUserAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPage from './components/LoginPage';
import { Home } from "./components/Home";

library.add(fab, faThumbsUp, faShare,faComment,faUserAlt);

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/Login" exact component={LoginPage} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
