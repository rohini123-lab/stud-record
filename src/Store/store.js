// store.js
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './courseSlice';
import studentdReducer from './studentSlice'

const store = configureStore({
  reducer: {
    courses: courseReducer,
    students: studentdReducer,
  },
});

export default store;
