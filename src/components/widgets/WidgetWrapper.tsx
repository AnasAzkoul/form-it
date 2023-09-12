import React from 'react';
import { Button } from '../ui/button';
import {OptionTypes} from '../../types';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  children: React.ReactNode;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: 'default' | 'mcq';
  setOptionsCount?: React.Dispatch<React.SetStateAction<OptionTypes[]>>;
  optionsCount?: OptionTypes[];
};

const WidgetWrapper = ({
  children,
  setIsSaved,
  variant = 'default',
  setOptionsCount,
  optionsCount
}: Props) => {
  return (
    <div className='flex flex-col w-full gap-3'>
      {children}
      <div className='flex justify-end gap-2 mt-6'>
        {variant === 'mcq' && (
          <Button
            variant={'outline'}
            onClick={() => setOptionsCount([...optionsCount, {id: uuidv4()}])}
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
