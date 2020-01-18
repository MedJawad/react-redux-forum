import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faShare , faComment } from '@fortawesome/free-solid-svg-icons';
import LoginPage from './components/LoginPage';
import { Home } from "./components/Home";
import { useSelector } from 'react-redux';

library.add(fab, faThumbsUp, faShare,faComment);

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
