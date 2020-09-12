import {Component} from '@angular/core';
import {QuotationService} from '../services/quotation.service';

@Component({
  templateUrl: './quotation.component.html'
})
export class QuotationComponent {
  constructor(private quotationService: QuotationService) {
  }

  get loading(): boolean {
    return this.quotationService.loading;
  }
}
