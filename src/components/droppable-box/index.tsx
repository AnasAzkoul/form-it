import DroppableWidget from './DroppableWidget';
import useDroppableStore from '@/store/droppable_store';

type Props = {};

const DroppableBox = (props: Props) => {
  const { handleOnDrop, handleOnDragOver, widgets } = useDroppableStore();
  return (
    <div className='col-span-7 col-start-5 mt-20'>
      <div
        className='container  border-2 border-dashed max-w-4xl flex flex-col gap-3 p-3 min-h-[200px]'
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
