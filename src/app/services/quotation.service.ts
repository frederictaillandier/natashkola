import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class ChoiceConfig {
  imageUrl?: string;
  name?: string;
  label: string;
}

export class StepConfig {
  question: string;
  choices: ChoiceConfig[];
}

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private _currentStep = 0;
  private _choices: number[] = [];
  constructor(private router: Router) {
  }



  steps: StepConfig[] = [
    {
      question: 'QuotationLanguageTitle',
      choices: [
        {
          imageUrl: './assets/images/france_logo.png',
          label: 'French'
        },
        {
          imageUrl: './assets/images/spain_logo.png',
          label: 'Spanish'
        }
      ]
    },
    {
      question: 'QuotationSizeTitle',
      choices: [
        {
          imageUrl: './assets/images/france_logo.png',
          label: 'Personal'
        },
        {
          imageUrl: './assets/images/france_logo.png',
          label: 'Small'
        },
        {
          imageUrl: './assets/images/france_logo.png',
          label: 'Big'
        }
      ]
    },
    {
      question: 'QuotationLevelTitle',
      choices: [
        {
          name: 'A1',
          label: 'Beginner'
        },
        {
          name: 'A2',
          label: 'UpperBeginner'
        },
        {
          name: 'B1',
          label: 'Intermediate'
        },
        {
          name: 'B2',
          label: 'UpperIntermediate'
        },
        {
          name: 'C1',
          label: 'Advanced'
        },
        {
          name: 'C2',
          label: 'UpperAdvanced'
        },
        {
          name: '??',
          label: 'Unknown'
        }
      ]
    }
  ];

  next() {
    ++this._currentStep;
    if (this._currentStep >= this.steps.length) {
      this._currentStep = 0;
      this.router.navigateByUrl('/landing').then();
    }
  }

  back() {
    --this._currentStep;
  }

  setCurrentOption(option: number) {
    this._choices[this._currentStep] = option;
  }

  getChoices(): number[] {
    return this._choices;
  }

  getCurrentQuestion(): string
  {
    return this.steps[this._currentStep].question;
  }

  getCurrentChoiceOptions(): ChoiceConfig[]
  {
    return this.steps[this._currentStep].choices;
  }
}

