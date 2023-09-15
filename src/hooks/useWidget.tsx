import { ChangeEvent, useState } from 'react';
import {MultipleChoiceQuestionType, YesNoQuestionType, QuestionWithTextBoxType} from '../types';

export function useWidget() {
  const [question, setQuestion] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {

    setQuestion(e.target.value);
  };

  return {
    question,
    setQuestion,
    handleOnChange
  };
}
