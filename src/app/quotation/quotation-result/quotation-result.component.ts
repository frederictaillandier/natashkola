import {Component, EventEmitter} from '@angular/core';
import {IQuotationStep} from '../iquotation-step';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'pm-quotation-result',
  templateUrl: './quotation-result.component.html',
  styleUrls: ['./quotation-result.component.css',
              '../quotation.component.css']
})
export class QuotationResultComponent implements IQuotationStep {
  nextStep: EventEmitter<number> = new EventEmitter<number>();

  get PhoneNumber() {
    return environment.contact.phone;
  }

  get Mail() {
    return environment.contact.mail;
  }

}
