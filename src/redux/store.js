import { configureStore } from '@reduxjs/toolkit'; //Importing configure store from redux toolkit
import filterReducer from './filterSlice'; //Importing filer slice file

const store = configureStore({
  reducer: {
    filter: filterReducer, //my filter reducer
  },
});

export default store;
