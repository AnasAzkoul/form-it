import {
  addNewWidget,
  deleteWidget,
  addNewOptionToQuestion,
  deleteOption,
  saveWidgetData,
  editWidgetData,
  
} from './features/droppable/droppableSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

export const useDroppableSlice = () => {
  const dispatch = useDispatch();
  const { widgets } = useSelector((state: RootState) => state.droppable);

  return {
    widgets,
    dispatch,
    addNewWidget,
    deleteWidget,
    addNewOptionToQuestion,
    deleteOption,
    saveWidgetData,
    editWidgetData,
    
  };
};
