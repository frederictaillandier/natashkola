export class ChoiceConfig {
  imageUrl?: string;
  name?: string;
  label: string;
}

export class StepConfig {
  question: string;
  property: string;
  choices: ChoiceConfig[];
}
