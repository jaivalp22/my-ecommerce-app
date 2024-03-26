import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/productpage" element={<Productpage />} />
        </Routes>
      </div>
    </Router>
  ); 
};

export default App;