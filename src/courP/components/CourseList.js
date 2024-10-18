import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../slices/CourseSlice'; 

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  return (
    <div className="container mt-3">
      <h2>Course List</h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <div className="card mb-3">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p className="card-text">
                  <small className="text-muted">{course.comments.length} comments</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCourses } from '../slices/CourseSlice'; // Adjust the path as necessary

// function CourseList() {
//   const dispatch = useDispatch();
//   const { courses, status, error } = useSelector((state) => state.courses);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchCourses());
//     }
//   }, [dispatch, status]);

//   return (
//     <div>
//       <h2>Course List</h2>
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'succeeded' && (
//         <ul>
//           {courses.map((course) => (
//             <li key={course.id}>
//               <h3>{course.title}</h3>
//               <p>{course.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//       {status === 'failed' && <p>{error}</p>}
//     </div>
//   );
// }

// export default CourseList;

