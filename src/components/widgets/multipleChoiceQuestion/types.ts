import type {
  WidgetTypes,
  MultipleChoiceQuestionType,
  ChoiceType,
} from '../../../types';

export type Props = {
  widget: WidgetTypes;
};

export type OptionsType = {
  [name: string]: string;
};
