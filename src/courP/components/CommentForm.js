import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../slices/CourseSlice';
import { useParams } from 'react-router-dom';

function CommentForm() {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the comment is not empty
    if (!comment.trim()) {
      setError('Comment cannot be empty');
      return;
    }

    const parsedCourseId = parseInt(courseId, 10);
    if (isNaN(parsedCourseId)) {
      setError('Invalid course ID');
      return;  
    }

    dispatch(addComment({ courseId: parsedCourseId, comment }));

    setComment('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 container">
      <div className="form-group">
        <label htmlFor="commentInput">Comment</label>
        <input
          type="text"
          id="commentInput"
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here"
        />
        {error && <small className="text-danger">{error}</small>}
      </div>
      <button type="submit" className="btn btn-primary mt-2">Add Comment</button>
    </form>
  );
}

export default CommentForm;
