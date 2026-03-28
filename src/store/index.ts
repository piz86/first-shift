import { configureStore } from '@reduxjs/toolkit';
import collegeReducer from './slices/collegeSlice';
import favoritesReducer from './slices/favoritesSlice';
import comparisonReducer from './slices/comparisonSlice';
import profileReducer from './slices/profileSlice';
import timelineReducer from './slices/timelineSlice';

const store = configureStore({
  reducer: {
    colleges: collegeReducer,
    favorites: favoritesReducer,
    comparison: comparisonReducer,
    profile: profileReducer,
    timeline: timelineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;