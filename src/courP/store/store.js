// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';   
import courseReducer from '../slices/CourseSlice';  

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
  },
});

export default store;
