import DroppableWidget from './DroppableWidget';
import { useDroppableSlice } from '@/redux/hooks';

type Props = {};

const DroppableBox = (props: Props) => {
  const { addNewWidget, dispatch, widgets } = useDroppableSlice();

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const jsonWidgetData = e.dataTransfer.getData('text/plain');
    const widgetData = JSON.parse(jsonWidgetData);
    dispatch(addNewWidget(widgetData));
  };

  return (
    <div className='col-span-7 col-start-5 mt-20'>
      <div
        className='container border-2 border-dashed max-w-4xl flex flex-col gap-3 p-3 min-h-[200px]'
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
