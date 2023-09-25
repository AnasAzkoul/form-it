import { configureStore } from '@reduxjs/toolkit';
import droppableReducer from './features/droppable/droppableSlice';
import {LocalStorageItems} from './features/droppable/types'

export const store = configureStore({
  reducer: {
    droppable: droppableReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem(LocalStorageItems.Widgets, serializedState); 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
