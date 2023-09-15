import React from 'react';
import { Button } from '../../ui/button';
import { WidgetTypes, WidgetVariantsType } from '../../../types';
import { useDroppableSlice } from '@/store/hooks';
import CloseIcon from '../../icons/Close';
import { Separator } from '@/components/ui/separator';

interface WidgetControlPanelProps{
  widget: WidgetTypes;
};

const WidgetControlPanel = ({
  widget,
}: WidgetControlPanelProps) => {
  const {
    dispatch,
    deleteWidget,
    addNewOptionToQuestion,
    deleteOption,
    editWidgetData,
  } = useDroppableSlice();

  return (
    <>
      <div className='flex items-center justify-end gap-2'>
        {widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION && (
          <>
            <Button
              variant={'outline'}
              onClick={() => dispatch(addNewOptionToQuestion(widget.id))}
              type='button'
              className='text-xs'
              disabled={widget.choices.length > 5}
            >
              Add option
            </Button>
            <Button
              variant={'outline'}
              onClick={() => dispatch(deleteOption(widget.id))}
              type='button'
              disabled={widget.choices.length <= 2}
              className='text-xs'
            >
              Delete option
            </Button>
          </>
        )}

        <Button
          onClick={() => dispatch(editWidgetData(widget.id))}
          className='text-xs'
        >
          Edit
        </Button>

        <Button
          onClick={() => dispatch(deleteWidget(widget.id))}
          className='bg-red-600 hover:bg-red-800 text-xs p-1'
          size='icon'
          type='button'
        >
          <CloseIcon />
        </Button>
      </div>
      <div className='flex justify-end'>
        <Separator className='w-[90%] bg-gray-400/50 h-0.5 rounded-md' />
      </div>
    </>
  );
};

export default WidgetControlPanel;
