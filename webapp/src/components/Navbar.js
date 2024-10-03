/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css'; // Adding custom CSS to refine styles

class Navbar extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             
              Virtual Library
            </a>
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
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Reading List
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Browse Books
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-light ms-3" href="#">
                    Sign In
                  </a>
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
