import {Component} from '@angular/core';
import {QuotationService} from '../../services/quotation.service';
import {ChoiceConfig} from '../../dtos/step-config.dto';

@Component({
  selector: 'pm-quotation-summary',
  templateUrl: './quotation-summary.component.html',
  styleUrls: ['./quotation-summary.component.css',
              '../quotation.component.css']
})
export class QuotationSummaryComponent {

  constructor(private quotationService: QuotationService) {
  }

  getFormattedChoices(): ChoiceConfig[] {
    return this.quotationService.getFormatedChoices();
  }
}
