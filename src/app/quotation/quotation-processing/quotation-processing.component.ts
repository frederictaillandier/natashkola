import {Component, EventEmitter} from '@angular/core';
import {IQuotationStep} from '../iquotation-step';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-quotation-processing',
  templateUrl: './quotation-processing.component.html',
  styleUrls: ['./quotation-processing.component.css',
    '../quotation.component.css']
})
export class QuotationProcessingComponent implements IQuotationStep {

  constructor(private router: Router) {
    this.runQuery();
  }

  nextStep: EventEmitter<number> = new EventEmitter<number>();

  runQuery() {
    // Todo : Interrogate database
    of('dummy').pipe(delay(3000)).subscribe(
      x => {
        this.nextStep.emit(0);
      });

  }

}
