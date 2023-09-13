'use client';
import React, { useState } from 'react';
import WidgetWrapper from './WidgetWrapper';
import { useWidget } from '@/hooks/useWidget';
import type { WidgetTypes, MultipleChoiceQuestionType } from '../../types';
import { RadioGroup } from '@/components/ui/radio-group';

import OptionInput from './OptionInput';
import QuestionInput from './QuestionInput';

type Props = {
  widget: WidgetTypes
}

const MultipleChoiceQuestion = ({widget}: Props) => {
  const { isSaved, setIsSaved, setQuestion } = useWidget();
  const {choices, question} = widget as MultipleChoiceQuestionType;



  return (
    <WidgetWrapper
      setIsSaved={setIsSaved}
      variant='mcq'
      widget={widget}
    >
      {isSaved ? (
        <p>{question}</p>
      ) : (
        <QuestionInput
          onChange={(e) => setQuestion(e.target.value)}
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
