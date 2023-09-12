import React from 'react';
import WidgetWrapper from './WidgetWrapper';
import { useWidget } from '@/hooks/useWidget';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';
import QuestionInput from './QuestionInput';

const QuestionWithTextBox = () => {
  const { isSaved, question, setIsSaved, setQuestion } = useWidget();
  return (
    <WidgetWrapper setIsSaved={setIsSaved}>
      {isSaved ? (
        <p>{question}</p>
      ) : (
        <QuestionInput
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      )}
      <Textarea
        placeholder='Type your message here.'
        className='w-full placeholder:text-gray-400'
      />
    </WidgetWrapper>
  );
};

export default QuestionWithTextBox;
