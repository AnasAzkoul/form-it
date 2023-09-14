'use client';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import WidgetWrapper from './ui/WidgetWrapper';
import { useWidget } from '@/hooks/useWidget';
import QuestionInput from './ui/QuestionInput';
import { WidgetTypes } from '@/types';

type Props = {
  widget: WidgetTypes;
};

const YesNoQuestion = ({ widget }: Props) => {
  const { isSaved, setIsSaved, question, setQuestion } = useWidget();

  return (
    <WidgetWrapper
      setIsSaved={setIsSaved}
      widget={widget}
    >
      {isSaved ? (
        <p className='text-gray-300 capitalize'>{question}</p>
      ) : (
        <QuestionInput
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      )}

      <RadioGroup>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem
            value='y'
            id='r1'
          />
          <Label htmlFor='r1'>Yeah, why not!</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem
            value='n'
            id='r2'
          />
          <Label htmlFor='r2'>hmm, I'm not really sure</Label>
        </div>
      </RadioGroup>
    </WidgetWrapper>
  );
};

export default YesNoQuestion;
