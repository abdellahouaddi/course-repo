import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find((course) => course.id === Number(courseId))
  );
  const comments = useSelector((state) => state.courses.comments[courseId] || []);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;

