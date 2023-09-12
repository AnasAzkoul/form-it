import React, { useState } from 'react';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';
import { useWidget } from '@/hooks/useWidget';
import { Button } from '../ui/button';
import CloseIcon from '../icons/Close';
import TickIcon from '../icons/Tick';
import type { OptionTypes } from '../../types';

type Props = {
  id: string;
  optionsCount: OptionTypes[];
  setOptionsCount: React.Dispatch<React.SetStateAction<OptionTypes[]>>;
};

const OptionInput = ({ id, optionsCount, setOptionsCount }: Props) => {
  const { question, setQuestion, isSaved, setIsSaved } = useWidget();

  const deleteOption = (id: string) => {
    const filteredOptions = optionsCount.filter(option => option.id !== id);
    setOptionsCount(filteredOptions)
  };

  return (
    <div className='flex items-center gap-2 relative group'>
      <RadioGroupItem
        value={question}
        id={id}
      />
      {isSaved ? (
        <Label>{question}</Label>
      ) : (
        <Input
          type='text'
          placeholder='write your option here'
          className='border-transparent border-b-gray-300 rounded-none placeholder:text-gray-400 focus-visible:ring-0'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      )}

      <div className='absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2'>
        <Button
          className='border-none text-red-800 p-0 hover:bg-transparent hover:text-red-950'
          variant='outline'
          size='sm'
          onClick={() => deleteOption(id)}
        >
          <CloseIcon />
        </Button>
        <Button
          variant='outline'
          size='sm'
          className='border-none text-green-800 p-0 hover:bg-transparent hover:text-green-950'
          onClick={() => setIsSaved(true)}
        >
          <TickIcon />
        </Button>
      </div>
    </div>
  );
};

export default OptionInput;
