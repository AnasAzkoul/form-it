import React from 'react';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '../../ui/input';
import { useWidget } from '@/hooks/useWidget';

type Props = {
  id: string;
};

const OptionInput = ({ id }: Props) => {
  const { question, setQuestion, isSaved, setIsSaved } = useWidget();

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
    </div>
  );
};

export default OptionInput;
