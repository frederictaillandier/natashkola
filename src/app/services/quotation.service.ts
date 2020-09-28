import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, filter, map, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ChoiceConfig, StepConfig} from '../dtos/step-config.dto';
import {CourseDto} from '../dtos/course.dto';

export enum CourseLanguage {
  French,
  Spanish
}

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private _currentQuestion = 0;
  private _choices: number[] = [];
  private _loading = false;
  private _questionSteps: StepConfig[];

  private quotationStepsUrl = 'api/quotation/quotation-steps.json';
  private coursesUrl = 'api/courses/courses.json';

  // Todo: set to proper new file
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getQuotationSteps(): Observable<StepConfig[]> {
    return this.http.get<StepConfig[]>(this.quotationStepsUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // Todo: backend function
  getAvailableCourses(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(this.coursesUrl)
      .pipe(
        map(data => data.filter(item =>
        {
          for (const [index, value] of this._choices.entries())
          {
            if (item[this._questionSteps[index].property] !== this._questionSteps[index].choices[value].label){
              return false;
            }
          }
          return true;
        })),
          catchError(this.handleError)
      );
  }

  constructor(private router: Router,
              private http: HttpClient) {
    this.getQuotationSteps().subscribe(result => {
      this._questionSteps = result;
    });
  }

  resetChoices() {
    this._choices = [];
    this._currentQuestion = 0;
  }

  nextQuestion() {
    ++this._currentQuestion;
  }

  hasQuestionsLeft(): boolean {
    return this._currentQuestion < this._questionSteps.length;
  }

  setCurrentOption(option: number) {
    this._choices[this._currentQuestion] = option;
  }

  getCurrentQuestion(): string {
    if (!this._questionSteps) {
      return;
    }
    if (this.hasQuestionsLeft()) {
      return this._questionSteps[this._currentQuestion].question;
    }
    return null;
  }

  getCurrentChoiceOptions(): ChoiceConfig[] {
    if (!this._questionSteps) {
      return;
    }
    if (this.hasQuestionsLeft()) {
      return this._questionSteps[this._currentQuestion].choices;
    }
    return null;
  }

  getFormattedChoices(): ChoiceConfig[] {
    return this._choices.map((choice, index) =>
      this._questionSteps[index].choices[choice]
    );
  }

  get loading() {
    return this._loading;
  }
}

