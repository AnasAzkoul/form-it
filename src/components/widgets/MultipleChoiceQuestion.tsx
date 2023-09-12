'use client';
import React, { useState } from 'react';
import WidgetWrapper from './WidgetWrapper';
import { useWidget } from '@/hooks/useWidget';

import type { OptionTypes } from '../../types';
import { RadioGroup } from '@/components/ui/radio-group';
import { v4 as uuidv4 } from 'uuid';
import OptionInput from './OptionInput';
import QuestionInput from './QuestionInput';

const MultipleChoiceQuestion = () => {
  const { isSaved, question, setIsSaved, setQuestion } = useWidget();
  const [optionsCount, setOptionsCount] = useState<OptionTypes[]>([
    { id: uuidv4() },
  ]);

  return (
    <WidgetWrapper
      setIsSaved={setIsSaved}
      variant='mcq'
      setOptionsCount={setOptionsCount}
      optionsCount={optionsCount}
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
        {optionsCount.map((option) => (
          <OptionInput
            key={option.id}
            id={option.id}
            optionsCount={optionsCount}
            setOptionsCount={setOptionsCount}
          />
        ))}
      </RadioGroup>
    </WidgetWrapper>
  );
};

export default MultipleChoiceQuestion;
