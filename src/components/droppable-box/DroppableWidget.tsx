import React, {use} from 'react';
import { Button } from '../ui/button';
import CloseIcon from '../icons/Close';
import { WidgetTypes, WidgetVariantsType } from '../../types';
import YesNoQuestion from '../widgets/YesNoQuestion';
import MultipleChoiceQuestion from '../widgets/MultipleChoiceQuestion';
import QuestionWithTextBox from '../widgets/QuestionWithTextBox';
import useDroppableStore from '@/store/droppable_store';

type Props = {
  widget: WidgetTypes;
};

const widgetComponents = {
  'multiple choice question': MultipleChoiceQuestion,
  'yes/no question': YesNoQuestion,
  'question with text box': QuestionWithTextBox,
};

const DroppableWidget = ({ widget}: Props) => {
  const CurrentView = widgetComponents[widget.variant];
  const {handleDeleteWidget} = useDroppableStore();
  return (
    <div
      key={widget.id}
      className='flex flex-col justify-between gap-4 px-6 py-4 bg-slate-500 rounded-xl'
    >
      <div className='flex items-center justify-end'>
        <Button onClick={() => handleDeleteWidget(widget.id)}>
          <CloseIcon />
        </Button>
      </div>
      <CurrentView />
    </div>
  );
};

export default DroppableWidget;
