import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router Basics</h1>
            <Contact />
            <About />
            <Projects />
            <NoMatch />
          </header>

    </div>
    );
  }
}

export default App;
