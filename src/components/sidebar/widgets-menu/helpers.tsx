import { v4 as uuidv4 } from 'uuid';
import { WidgetVariantsType, WidgetTypes } from '../../../types';

export const handleOnDragStart = (
  e: React.DragEvent,
  widgetVariant: WidgetVariantsType
) => {
  const widgetData: WidgetTypes = {
    id: uuidv4(),
    variant: widgetVariant
  };
  e.dataTransfer.setData('text/plain', JSON.stringify(widgetData));
};
