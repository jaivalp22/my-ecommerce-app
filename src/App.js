import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './component/Homepage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomRoutes />
      </div>
    </Router>
  );
};

export default App;

const CustomRoutes = () => {
  const path = window.location.pathname;
  
  switch (path) {
    case '/':
      return <Homepage />;
    default:
      return <NotFoundPage />;
  }
};

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
