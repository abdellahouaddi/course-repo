import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import Navbar from './components/navbar'; // Make sure the component name matches
import Admindashboard from './components/admindashboard'; // Ensure the name is correct
import CommentForm from './components/CommentForm';
function App() {
  const { user, role } = useSelector((state) => state.auth);
    
  return (
    <Router>
      <Navbar role={role} /> {/* Pass the role to Navbar for rendering based on role */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/courses/:courseId/comment" element={<CommentForm />} />
        
        {/* Protect admin route */}
        <Route 
          path="/admin-dashboard" 
          element={role === 'admin' ? <Admindashboard /> : <Navigate to="/login" />} 
        />

        {/* Redirect all other paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
