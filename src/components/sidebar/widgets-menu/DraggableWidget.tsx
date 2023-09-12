import React from 'react';
import DragIcon from '@/components/icons/Drag';
import { handleOnDragStart } from './helpers';
import { WidgetMenuItem } from '../../../types';

type Props = {
  widget: WidgetMenuItem;
};

const DraggableWidget = ({ widget }: Props) => {
  return (
    <span
      className='flex items-center gap-2 px-5 py-2 capitalize rounded-lg cursor-pointer hover:bg-slate-600'
      draggable
      onDragStart={(e) => handleOnDragStart(e, widget.variant)}
    >
      <span className='text-sm tracking-widest'>{widget.variant}</span>
      <DragIcon />
    </span>
  );
};

export default DraggableWidget;
