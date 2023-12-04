// courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  student: [],
  status: 'idle',
  error: null,
};

// Define the asynchronous thunk to fetch the course data from the API
export const fetchStudent = createAsyncThunk('courses/fetchStudent', async () => {
  const response = await axios.get('https://mocki.io/v1/2aee7e05-14c7-437f-9997-095eb684607a');
  return response.data;
});

// Create a slice of the Redux store
const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    updateProgress: (state, action) => {
      // Assuming the action.payload contains the updated name and studentId
      const { studentId, courseId, newProgress } = action.payload;
     
      const studentToUpdate = state.student.students.find(student => student.id === studentId);
      if (studentToUpdate) {
        const courseToUpdate = studentToUpdate.enrolledCourses.find(course => course.courseId === courseId);
        if (courseToUpdate) {
          courseToUpdate.progress = newProgress;
        }
      }
    },
  },
  extraReducers: (builder) => {
    // Handle the pending state when the API call is in progress
    builder.addCase(fetchStudent.pending, (state) => {
      state.status = 'loading';
    });

    // Handle the fulfilled state when the API call is successful
    builder.addCase(fetchStudent.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log('action',action)
      state.student = action.payload;
    });

    // Handle the rejected state when the API call fails
    builder.addCase(fetchStudent.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { updateProgress } = studentSlice.actions;

export default studentSlice.reducer;
