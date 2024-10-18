import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../slices/CourseSlice'; 

function CourseForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { title, description };
    dispatch(addCourse(newCourse));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 container">
      <div className="mb-3">
        <label htmlFor="courseTitle" className="form-label">Title:</label>
        <input 
          type="text" 
          id="courseTitle"
          className="form-control" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter course title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="courseDescription" className="form-label">Description:</label>
        <textarea 
          id="courseDescription"
          className="form-control" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter course description"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Course</button>
    </form>
  );
}

export default CourseForm;

