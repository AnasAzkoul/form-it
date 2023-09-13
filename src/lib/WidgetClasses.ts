import {
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
    this.label = ''
  }
}

export class MultipleChoiceQuestion implements MultipleChoiceQuestionType {
  id: string;
  variant: WidgetVariantsType.MULTIPLE_CHOICE_QUESTION;
  question: string;
  choices: { id: string; label: string }[];

  constructor() {
    this.id = uuidv4();
    this.variant = WidgetVariantsType.MULTIPLE_CHOICE_QUESTION;
    this.question = '';
    this.choices = [{id: uuidv4(), label: ''}];
  }
}

export class YesNoQuestion implements YesNoQuestionType {
  id: string;
  variant: WidgetVariantsType.YES_NO_QUESTION;
  question: string;
  choice: [{ id: string; label: string }, { id: string; label: string }];

  constructor() {
    this.id = uuidv4();
    this.variant = WidgetVariantsType.YES_NO_QUESTION;
    this.question = '';
    this.choice = [
      { id: uuidv4(), label: '' },
      { id: uuidv4(), label: '' },
    ];
  }
}

export class QuestionWithTextBox implements QuestionWithTextBoxType {
  id: string;
  variant: WidgetVariantsType.QUESTION_WITH_TEXT_BOX;
  question: string;
  answer: string;

  constructor() {
    this.id = uuidv4();
    this.variant = WidgetVariantsType.QUESTION_WITH_TEXT_BOX;
    this.question = '';
    this.answer = '';
  }
}
