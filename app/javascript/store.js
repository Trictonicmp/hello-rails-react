import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import greetings from './greetingsReducer';

const store = configureStore({
  reducer: {
    greetings,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;
