import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

ReactDOM.render(<Router>
  <div>
    <ul>
      <li><Link to ="/">Home</Link></li>
      <li><Link to ="/contact">Contact Info</Link></li>
      <li><Link to ="/about">About me</Link></li>
      <li><Link to ="/projects">Projects</Link></li>
    </ul>
      <Route exact path="/" component={App}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="*" component={NoMatch}/>
  </div>
</Router>

, document.getElementById('root'));
registerServiceWorker();
