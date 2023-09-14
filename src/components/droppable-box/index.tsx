import { useState } from 'react';
import DroppableWidget from './DroppableWidget';
import { useDroppableSlice } from '@/store/hooks';
import classNames from 'classnames';

const DroppableBox = () => {
  const [isOver, setIsOver] = useState(false);
  const { addNewWidget, dispatch, widgets } = useDroppableSlice();

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const jsonWidgetData = e.dataTransfer.getData('text/plain');
    const widgetData = JSON.parse(jsonWidgetData);
    dispatch(addNewWidget(widgetData));
    setIsOver(false);
  };

  return (
    <div className='col-span-7 col-start-5 mt-20'>
      <div
        className={classNames(
          'container border-2 border-dashed max-w-4xl flex flex-col gap-3 p-3 min-h-[200px] pb-20',
          isOver && 'border-red-400'
        )}
        onDragOver={(e) => handleOnDragOver(e)}
        onDrop={handleOnDrop}
      >
        {widgets.map((widget) => (
          <DroppableWidget
            key={widget.id}
            widget={widget}
          />
        ))}
      </div>
    </div>
  );
};

export default DroppableBox;
