import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeMainSection from './components/HomeMainSection';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="App-header">
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
            </div>
            <HomeMainSection />
          </Route>
          {/* Define other routes */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
