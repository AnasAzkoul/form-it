import React from 'react';
import YesNoQuestion from '../widgets/YesNoQuestion';
import MultipleChoiceQuestion from '../widgets/MultipleChoiceQuestion';
import QuestionWithTextBox from '../widgets/QuestionWithTextBox';
import { WidgetTypes } from '../../types';

type Props = {
  widget: WidgetTypes;
};

const widgetComponents = {
  'multiple choice question': MultipleChoiceQuestion,
  'yes/no question': YesNoQuestion,
  'question with text box': QuestionWithTextBox,
};

const CurrentView = ({widget}: Props) => {
  const CurrentView = widgetComponents[widget.variant];
  return (
    <div>CurrentView</div>
  )
}

export default CurrentView
