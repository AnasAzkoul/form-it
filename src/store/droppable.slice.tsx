import { StateCreator } from 'zustand';
import { WidgetTypes, WidgetVariantsType } from '../types';
import { Choice } from '../lib/WidgetClasses';

export type DroppableSlice = {
  widgets: WidgetTypes[];
  handleOnDragOver: (e: React.DragEvent) => void;
  handleOnDrop: (e: React.DragEvent) => void;
  deleteWidget: (id: string) => void;
  addNewChoiceToQuestion: (id: string) => void;
};

export const createDroppableSlice: StateCreator<DroppableSlice> = (
  setState,
  getState
) => ({
  widgets: [],
  handleOnDragOver(e: React.DragEvent) {
    e.preventDefault();
  },
  handleOnDrop(e: React.DragEvent) {
    const jsonWidgetData = e.dataTransfer.getData('text/plain');
    const widgetData = JSON.parse(jsonWidgetData);
    setState((state) => ({
      ...state,
      widgets: [...state.widgets, widgetData],
    }));
  },
  addNewChoiceToQuestion(id: string) {
    const { widgets } = getState();

    const updatedWidgets = widgets.map((widget) => {
      if (
        widget.id === id &&
        widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION
      ) {
        const newChoice = new Choice();
        return { ...widget, choices: [...widget.choices, newChoice] };
      }
    });

    // @ts-ignore
    setState((state) => ({ ...state, widgets: updatedWidgets }));
  },
  saveWidgetData(id: string) {},
  deleteWidget(id: string) {
    const { widgets } = getState();

    const filteredWidgets = widgets.filter((widget) => widget.id !== id);

    setState((state) => ({
      ...state,
      widgets: filteredWidgets,
    }));
  },
});
