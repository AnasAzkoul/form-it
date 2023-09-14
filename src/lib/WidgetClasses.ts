import {
  WidgetType,
  WidgetVariantsType,
  ChoiceType,
  MultipleChoiceQuestionType,
  YesNoQuestionType,
  QuestionWithTextBoxType,
} from '../types';
import { v4 as uuidv4 } from 'uuid';

export class Choice implements ChoiceType {
  id: string;
  label: string;

  constructor() {
    this.id = uuidv4();
    this.label = '';
  }
}

class Widget implements WidgetType{
  id: string;
  question: string;
  isSaved: boolean;

  constructor() {
    this.id = uuidv4();
    this.question = '';
    this.isSaved = false; 
  }
}

export class MultipleChoiceQuestion
  extends Widget
  implements MultipleChoiceQuestionType
{
  variant: WidgetVariantsType.MULTIPLE_CHOICE_QUESTION;
  choices: ChoiceType[];

  constructor() {
    super();
    this.variant = WidgetVariantsType.MULTIPLE_CHOICE_QUESTION;
    this.choices = [{ id: uuidv4(), label: '' }];
  }
}

export class YesNoQuestion extends Widget implements YesNoQuestionType {
  variant: WidgetVariantsType.YES_NO_QUESTION;
  choice: [ChoiceType, ChoiceType];

  constructor() {
    super();
    this.variant = WidgetVariantsType.YES_NO_QUESTION;
    this.choice = [new Choice(), new Choice()];
  }
}

export class QuestionWithTextBox
  extends Widget
  implements QuestionWithTextBoxType
{
  variant: WidgetVariantsType.QUESTION_WITH_TEXT_BOX;
  answer: string;

  constructor() {
    super();
    this.variant = WidgetVariantsType.QUESTION_WITH_TEXT_BOX;
    this.answer = '';
  }
}
