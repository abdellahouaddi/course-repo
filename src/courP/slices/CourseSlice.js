import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get('http://localhost:3002/courses'); 
  return response.data;
});

export const addCourse = createAsyncThunk('courses/addCourse', async (newCourse) => {
  const response = await axios.post('http://localhost:3002/courses', newCourse);
  return response.data;
});

export const updateCourse = createAsyncThunk('courses/updateCourse', async (updatedCourse) => {
  const response = await axios.put(`http://localhost:3002/courses/${updatedCourse.id}`, updatedCourse);
  return response.data;
});

export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (courseId) => {
  await axios.delete(`http://localhost:3002/courses/${courseId}`); 
  return courseId;
});


export const addComment = createAsyncThunk(
  'courses/addComment',
  async ({ courseId, comment }) => {
    await axios.post(`http://localhost:3002/courses/${courseId}/comments`, {
      comment, 
    });
    return { courseId, comment };
  }
);



const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    comments: {}, 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(course => course.id === action.payload.id);
        state.courses[index] = action.payload;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(course => course.id !== action.payload);
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { courseId, comment } = action.payload;

        if (!state.comments[courseId]) {
          state.comments[courseId] = [];
        }

        state.comments[courseId].push(comment);
      });
  },
});

export default courseSlice.reducer;
