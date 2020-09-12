import {Component} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-quotation-processing',
  templateUrl: './quotation-processing.component.html',
  styleUrls: ['./quotation-processing.component.css',
              '../quotation.component.css']
})
export class QuotationProcessingComponent {

  constructor() {

  }
}
