
import React, { useEffect, useState } from 'react';
import { OptionsType } from './types';
import { useDroppableSlice } from '@/store/hooks';
import { WidgetTypes } from '@/types';

export const usePreSaveMCQWidget = (widget: WidgetTypes) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<OptionsType>({});
  const { dispatch, saveWidgetData, widgets } = useDroppableSlice();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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


  return ({
    handleSaveWidgetData,
    handleOptionChange,
    setQuestion,
    question,
    options
  })
};
