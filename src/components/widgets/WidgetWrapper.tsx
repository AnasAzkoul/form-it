import React from 'react';
import { Button } from '../ui/button';
import { WidgetTypes } from '../../types';
import { useBoundStore } from '@/store/store';
import { useDroppableSlice } from '@/redux/hooks';

type Props = {
  children: React.ReactNode;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: 'default' | 'mcq';
  widget: WidgetTypes;
};

const WidgetWrapper = ({
  children,
  setIsSaved,
  variant = 'default',
  widget,
}: Props) => {
  const {addNewOptionToQuestion, dispatch} = useDroppableSlice()

  return (
    <div className='flex flex-col w-full gap-3'>
      {children}
      <div className='flex justify-end gap-2 mt-6'>
        {variant === 'mcq' && (
          <Button
            variant={'outline'}
            onClick={() => dispatch(addNewOptionToQuestion(widget.id))}
          >
            Add another option
          </Button>
        )}
        <Button onClick={() => setIsSaved(false)}>Edit</Button>
        <Button onClick={() => setIsSaved(true)}>Save</Button>
      </div>
    </div>
  );
};

export default WidgetWrapper;
