import { create } from 'zustand';
import { createDroppableSlice } from './droppable.slice';
import type { DroppableSlice } from './droppable.slice';

export const useBoundStore = create<DroppableSlice>((...a) => ({
  ...createDroppableSlice(...a)
}))
