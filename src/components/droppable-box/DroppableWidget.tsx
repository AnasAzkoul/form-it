import React from 'react';
import { WidgetTypes, WidgetVariantsType } from '../../types';
import YesNoQuestion from '../widgets/YesNoQuestion';
import MultipleChoiceQuestion from '../widgets/multipleChoiceQuestion/index';
import QuestionWithTextBox from '../widgets/QuestionWithTextBox';

type Props = {
  widget: WidgetTypes;
};

const wrapperClasses = 'flex flex-col justify-between gap-4 px-5 py-4 bg-slate-500 rounded-xl'

const DroppableWidget = ({ widget }: Props) => {
  return (
    <div>
      {widget.variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION ? (
        <MultipleChoiceQuestion widget={widget} />
      ) : widget.variant === WidgetVariantsType.YES_NO_QUESTION ? (
        <YesNoQuestion widget={widget} />
      ) : (
        <QuestionWithTextBox widget={widget} />
      )}
    </div>
  );
};

export default DroppableWidget;
