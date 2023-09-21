import {WidgetTypes} from '../../../types'

export interface DroppableStateType {
  widgets: WidgetTypes[];
}

export enum LocalStorageItems {
  Widgets = 'widgets',
}
