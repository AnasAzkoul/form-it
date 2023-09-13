import { useState } from 'react';
import {MultipleChoiceQuestionType, YesNoQuestionType, QuestionWithTextBoxType} from '../types';

export function useWidget() {
  const [isSaved, setIsSaved] = useState(false);
  const [question, setQuestion] = useState('');

  return {
    isSaved,
    setIsSaved,
    question,
    setQuestion,
  };
}
