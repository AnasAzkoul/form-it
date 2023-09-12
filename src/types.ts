export enum WidgetVariantsType {
  MULTIPLE_CHOICE_QUESTION = 'multiple choice question',
  YES_NO_QUESTION = 'yes/no question',
  QUESTION_WITH_TEXT_BOX = 'question with text box',
}

export type WidgetTypes = {
  id: string;
  variant: WidgetVariantsType;
};

export type WidgetMenuItem = Pick<WidgetTypes, 'variant'>;


export type OptionTypes = {
  id: string
}
