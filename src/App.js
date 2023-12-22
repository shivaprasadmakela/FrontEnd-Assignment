// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Track from './Track/index';
import RunnerDetails from './Runnerdetails/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RunnerDetails/>}/>
        <Route path="/track" element={<Track />} />
      </Routes>
    </Router>
  );
}

export default App;
