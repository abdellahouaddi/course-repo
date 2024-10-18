import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Navbar({ role }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {role === 'admin' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              
            </>
          )}
          {role === 'user' && (
            <li className="nav-item">
              <Link className="nav-link" to="/courses/:courseId">CourseDetails</Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link " to="/courses/:courseId/comment">CommentForm</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/courses">CourseList</Link>
              </li>
          <li className="nav-item">
            <Link className="nav-link " to="/admin-dashboard">Admindashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
