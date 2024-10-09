import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css'; // Main CSS for the App
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; // Import the Home component
import ReadingList from './components/ReadingList';
import BrowseBooks from './components/BrowseBooks';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Navbar />  {/* Render the Navbar */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> 
        <Route path='/reading-list' element={<ReadingList/>}/>
        <Route path='/browse' element={<BrowseBooks/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
