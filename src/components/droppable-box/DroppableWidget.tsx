import React from 'react';
import { WidgetTypes, WidgetVariantsType } from '../../types';
import YesNoQuestion from '../widgets/YesNoQuestion';
import MultipleChoiceQuestion from '../widgets/MultipleChoiceQuestion';
import QuestionWithTextBox from '../widgets/QuestionWithTextBox';

type Props = {
  widget: WidgetTypes;
};

const DroppableWidget = ({ widget }: Props) => {
  return (
    <div className='flex flex-col justify-between gap-4 px-6 py-4 bg-slate-500 rounded-xl'>
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
