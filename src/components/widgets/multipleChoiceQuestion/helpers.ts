import { ChoiceType } from '../../../types';

export const generateInitialOptionsValues = (choices: ChoiceType[]) => {
  const initialValues: { [name: string]: string } = {};

  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
    if (initialValues[choice.id]) {
      initialValues[choice.id] = choice.label;
    }
  }

  return initialValues; 
};
