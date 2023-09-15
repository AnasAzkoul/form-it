'use client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import WidgetControlPanel from './ui/WidgetControlPanel';
import type {
  WidgetTypes,
  MultipleChoiceQuestionType,
  ChoiceType,
} from '../../types';
import OptionInput from './ui/OptionInput';
import QuestionInput from './ui/QuestionInput';
import { useDroppableSlice } from '@/store/hooks';
import { Button } from '../ui/button';

type Props = {
  widget: WidgetTypes;
};

type OptionsType = {
  [name: string]: string;
};

const MultipleChoiceQuestion = ({ widget }: Props) => {
  const { choices } = widget as MultipleChoiceQuestionType;
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<OptionsType>({});
  const { dispatch, saveWidgetData, widgets } = useDroppableSlice();

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOptions({ ...options, [name]: value });
  };

  const generateOptionsArray = (options: OptionsType) =>
    Object.entries(options).map((entry) => ({
      id: entry[0],
      label: entry[1],
    }));

  const handleSaveWidgetData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newChoices = generateOptionsArray(options);
    const payload = {
      id: widget.id,
      widgetQuestion: question,
      choices: newChoices,
    };

    dispatch(saveWidgetData(payload));
  };

  useEffect(() => {
    console.log(widgets);
  }, [widgets]);

  return (
    <div className='flex flex-col gap-3 justify-between'>
      <WidgetControlPanel widget={widget} />
      <form onSubmit={(e) => handleSaveWidgetData(e)} className='flex flex-col gap-6 mt-5 p-4 pb-0'>
        <QuestionInput
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          id='widget-question'
        />
        <div className='mt-4'>
          <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
            {choices.map((option) => (
              <OptionInput
                key={option.id}
                id={option.id}
                onChange={(e) => handleOptionChange(e)}
                name={option.id}
                value={options[option.id]}
              />
            ))}
          </div>
        </div>
        <div className='flex justify-end'>
          <Button
            type='submit'
            className='text-xs'
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MultipleChoiceQuestion;

const MultipleChoiceQuestionPostSave = ({widget}: Props) => {
  const {choices, widgetQuestion } = widget as MultipleChoiceQuestionType;
}
