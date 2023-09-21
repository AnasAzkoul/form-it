import {DroppableStateType, LocalStorageItems} from './types';
import {WidgetTypes} from '../../../types'


export const getInitialStateFromLocalStorage = () => {
  let data: { widgets: WidgetTypes[] } ;
  if (typeof window !== undefined) {
    const widgetsJson = localStorage.getItem(LocalStorageItems.Widgets);
    if (widgetsJson !== null) {
      data = JSON.parse(widgetsJson);
      return data !== null ? data.widgets : [];
    }
  }
};
