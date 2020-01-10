import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faShare , faComment } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faThumbsUp, faShare,faComment);

function App() {
  return (
    <div className="App">
        {/* <Navbar />
        <Main />
        test2 
         */}
         <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
