// courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  courses: [],
  status: 'idle',
  error: null,
};

// Define the asynchronous thunk to fetch the course data from the API
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get('https://mocki.io/v1/3483fedd-6b9f-45d0-81d7-6ee2f086c871');
  return response.data;
});

// Create a slice of the Redux store
const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state when the API call is in progress
    builder.addCase(fetchCourses.pending, (state) => {
      state.status = 'loading';
    });

    // Handle the fulfilled state when the API call is successful
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log(action)
      state.courses = action.payload;
    });

    // Handle the rejected state when the API call fails
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default courseSlice.reducer;
