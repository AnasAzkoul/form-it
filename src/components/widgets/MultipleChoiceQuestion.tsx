'use client';
import React from 'react';
import WidgetWrapper from './ui/WidgetWrapper';
import type { WidgetTypes, MultipleChoiceQuestionType } from '../../types';
import { RadioGroup } from '@/components/ui/radio-group';
import OptionInput from './ui/OptionInput';
import QuestionInput from './ui/QuestionInput';

type Props = {
  widget: WidgetTypes;
};

const MultipleChoiceQuestion = ({ widget }: Props) => {
  const { choices, question } = widget as MultipleChoiceQuestionType;

  return (
    <WidgetWrapper
      widget={widget}
    >
      {widget.isSaved ? (
        <p>{question}</p>
      ) : (
        <QuestionInput
          // onChange={(e) => setQuestion(e.target.value)}
          value={question}
        />
      )}
      <RadioGroup className='grid grid-cols-2 gap-x-8 gap-y-4'>
        {choices.map((option) => (
          <OptionInput
            key={option.id}
            id={option.id}
          />
        ))}
      </RadioGroup>
    </WidgetWrapper>
  );
};

export default MultipleChoiceQuestion;
