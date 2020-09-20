import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

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
  private _currentQuestion = 0;
  private _choices: number[] = [];
  private _loading = false;

  constructor(private router: Router) {
  }

  // Todo : set to environements
  questions: StepConfig[] = [
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
          imageUrl: './assets/images/individual_logo.png',
          label: 'Personal'
        },
        {
          imageUrl: './assets/images/small_group_logo.png',
          label: 'Small'
        },
        {
          imageUrl: './assets/images/group_logo.png',
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

  nextQuestion() {
    ++this._currentQuestion;
  }

  hasQuestionsLeft(): boolean {
    return this._currentQuestion < this.questions.length;
  }

  setCurrentOption(option: number) {
    this._choices[this._currentQuestion] = option;
  }

  getCurrentQuestion(): string {
    if (this.hasQuestionsLeft()) {
      return this.questions[this._currentQuestion].question;
    }
    return null;
  }

  setCurrentQuestion(index: number) {
    this._currentQuestion = index;
  }

  getCurrentChoiceOptions(): ChoiceConfig[] {
    if (this.hasQuestionsLeft()) {
      return this.questions[this._currentQuestion].choices;
    }
    return null;
  }

  getFormatedChoices(): ChoiceConfig[]
  {
    return this._choices.map((choice, index) =>
      this.questions[index].choices[choice]
    );
  }

  get loading() {
    return this._loading;
  }

  runQuery() {
    this._loading = true;
    // Todo : Interrogate database
    of('dummy').pipe(delay(3000)).subscribe(
      x => {
        this._loading = false;
        this.router.navigateByUrl('/landing').then();
      });

  }
}

