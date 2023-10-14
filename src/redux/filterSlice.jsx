// Import necessary modules
import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice named 'filterSlice'
const filterSlice = createSlice({
  name: 'filter', // Slice name
  initialState: {
    filterTerm: '', // Initial state with an empty filter term
  },
  reducers: {
    // Reducer to set the filter term
    setFilter: (state, action) => {
      state.filterTerm = action.payload; // Update the filter term with the payload value
    },
    // Reducer to clear the filter
    clearFilter: (state) => {
      state.filterTerm = ''; // Reset the filter term to an empty string
    },
  },
});

// Export action creators
export const { setFilter, clearFilter } = filterSlice.actions;

// Export the reducer for use in the Redux store
export default filterSlice.reducer;
