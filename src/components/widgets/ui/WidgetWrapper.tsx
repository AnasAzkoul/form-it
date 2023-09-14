import React from 'react';
import { Button } from '../../ui/button';
import { WidgetTypes, WidgetVariantsType } from '../../../types';
import { useDroppableSlice } from '@/store/hooks';
import CloseIcon from '../../icons/Close';

type Props = {
  children: React.ReactNode;
  widget: WidgetTypes;
};

const WidgetWrapper = ({ children, widget }: Props) => {
  const {
    addNewOptionToQuestion,
    dispatch,
    deleteOption,
    deleteWidget,
    saveWidgetData,
    editWidgetData,
  } = useDroppableSlice();

  return (
    <div className='flex flex-col w-full gap-3'>
      <div className='flex items-center justify-end'>
        <Button onClick={() => dispatch(deleteWidget(widget.id))}>
          <CloseIcon />
        </Button>
      </div>
      {children}
      <div className='flex justify-end gap-2 mt-6'>
        {widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION && (
          <div className='flex items-center gap-2'>
            <Button
              variant={'outline'}
              onClick={() => dispatch(addNewOptionToQuestion(widget.id))}
            >
              Add another option
            </Button>
            <Button
              variant={'outline'}
              onClick={() => dispatch(deleteOption(widget.id))}
            >
              Delete option
            </Button>
          </div>
        )}
        <Button onClick={() => dispatch(editWidgetData(widget.id))}>
          Edit
        </Button>
        <Button onClick={() => dispatch(saveWidgetData(widget.id))}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default WidgetWrapper;
