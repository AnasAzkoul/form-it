export enum WidgetVariantsType {
  MULTIPLE_CHOICE_QUESTION = 'multiple choice question',
  YES_NO_QUESTION = 'yes/no question',
  QUESTION_WITH_TEXT_BOX = 'question with text box',
}

export interface ChoiceType {
  id: string;
  label: string;
};

export interface MultipleChoiceQuestionType  {
  id: string;
  variant: WidgetVariantsType.MULTIPLE_CHOICE_QUESTION;
  question: string;
  choices: ChoiceType[];
};

export interface YesNoQuestionType {
  id: string;
  variant: WidgetVariantsType.YES_NO_QUESTION;
  question: string;
  choice: [ChoiceType, ChoiceType];
};

export interface QuestionWithTextBoxType {
  id: string;
  variant: WidgetVariantsType.QUESTION_WITH_TEXT_BOX;
  question: string;
  answer: string;
};

export type WidgetTypes =
  | MultipleChoiceQuestionType
  | YesNoQuestionType
  | QuestionWithTextBoxType;

export type WidgetMenuItem = Pick<WidgetTypes, 'variant'>;

export type OptionTypes = {
  id: string;
};
