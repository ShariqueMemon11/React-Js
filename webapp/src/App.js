import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css'; // Main CSS for the App
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <Navbar />  {/* Render the Navbar */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Render Home component on the root path */}
        {/* Add more routes here for other components/pages */}
      </Routes>
    </Router>
  );
}

export default App;
