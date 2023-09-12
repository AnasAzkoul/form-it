import { create } from 'zustand';
import { WidgetTypes } from '../types';

type DroppableStore = {
  widgets: WidgetTypes[];
};

type DroppableAction = {
  handleOnDragOver: (e: React.DragEvent) => void;
  handleOnDrop: (e: React.DragEvent) => void;
  handleDeleteWidget: (id: string) => void;
};

const useDroppableStore = create<DroppableStore & DroppableAction>((set) => ({
  widgets: [],
  handleOnDragOver(e: React.DragEvent) {
    e.preventDefault();
  },
  handleOnDrop(e: React.DragEvent) {
    const jsonWidgetData = e.dataTransfer.getData('text/plain');
    const widgetData = JSON.parse(jsonWidgetData);
    set((state) => ({...state, widgets: [...state.widgets, widgetData] }));
  },
  handleDeleteWidget(id: string) {
    set((state) => ({
      ...state, 
      widgets: state.widgets.filter((widget) => widget.id !== id),
    }));
  },
}));

export default useDroppableStore;
