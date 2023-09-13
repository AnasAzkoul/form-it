import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  WidgetTypes,
  WidgetVariantsType,
} from '../../../types';
// import { Choice } from '../../../lib/WidgetClasses';
import { v4 as uuidv4 } from 'uuid';


export interface DroppableStateType {
  widgets: WidgetTypes[];
}

export const initialState: DroppableStateType = {
  widgets: [],
};

export const DroppableSlice = createSlice({
  name: 'droppable',
  initialState,
  reducers: {
    addNewWidget: (state, action: PayloadAction<WidgetTypes>) => {
      state.widgets = [...state.widgets, action.payload];
    },
    deleteWidget: (state, action: PayloadAction<string>) => {
      const filteredWidgets = state.widgets.filter(
        (widget) => widget.id !== action.payload
      );
      state.widgets = filteredWidgets;
    },
    addNewOptionToQuestion: (state, action: PayloadAction<string>) => {
      state.widgets.forEach(widget => {
        if(widget.id === action.payload && widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION) {
          const newChoice = {id: uuidv4(), label: ''};
          widget.choices.push(newChoice);
        }
      })
    },
  },
});

export const { addNewWidget, deleteWidget, addNewOptionToQuestion } =
  DroppableSlice.actions;

export default DroppableSlice.reducer;
