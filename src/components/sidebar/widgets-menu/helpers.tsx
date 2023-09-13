import { v4 as uuidv4 } from 'uuid';
import {
  WidgetVariantsType,
  WidgetTypes,
  MultipleChoiceQuestionType,
  YesNoQuestionType,
  QuestionWithTextBoxType,
} from '../../../types';

import {MultipleChoiceQuestion, QuestionWithTextBox, YesNoQuestion} from '../../../lib/WidgetClasses'


const generateWidgetData = (variant: WidgetVariantsType) => {
  if (variant === WidgetVariantsType.MULTIPLE_CHOICE_QUESTION) {
    const newMcq = new MultipleChoiceQuestion();
    return newMcq;
  } else if (variant === WidgetVariantsType.YES_NO_QUESTION) {
    const newYesNo = new YesNoQuestion();
    return newYesNo;
  } else if (variant === WidgetVariantsType.QUESTION_WITH_TEXT_BOX) {
    const newQWithTextBox = new QuestionWithTextBox();
    return newQWithTextBox;
  }
};

export const handleOnDragStart = (
  e: React.DragEvent,
  widgetVariant: WidgetVariantsType
) => {
  const widgetData: WidgetTypes = generateWidgetData(widgetVariant) as
    | MultipleChoiceQuestionType
    | YesNoQuestionType
    | QuestionWithTextBoxType;
  e.dataTransfer.setData('text/plain', JSON.stringify(widgetData));
};
