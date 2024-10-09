/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css'; // Adding custom CSS to refine styles

class Navbar extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Virtual Library</Link> {/* Change from a to Link */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link> {/* Change from a to Link */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reading-list">My Reading List</Link> {/* Example for a reading list route */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/browse">Browse Books</Link> {/* Example for a browse books route */}
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light ms-3" to="/login">Log In</Link> {/* Example for sign-in route */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
