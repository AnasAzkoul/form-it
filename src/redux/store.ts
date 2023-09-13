import { configureStore } from '@reduxjs/toolkit';
import droppableReducer from './features/droppable/droppableSlice';

export const store = configureStore({
  reducer: {
    droppable: droppableReducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
