import {Component} from '@angular/core';
import {ChoiceConfig, QuotationService} from '../../services/quotation.service';

@Component({
  selector: 'pm-quotation-step',
  templateUrl: './quotation-step.component.html',
  styleUrls: ['./quotation-step.component.css',
    '../quotation.component.css']
})
export class QuotationStepComponent {

  constructor(private quotationService: QuotationService) {
  }

  onChooseOption(option: number) {
    this.quotationService.setCurrentOption(option);
    this.quotationService.next();
  }

  getCurrentQuestion(): string {
    return this.quotationService.getCurrentQuestion();
  }

  getCurrentChoices(): ChoiceConfig[] {
    return this.quotationService.getCurrentChoiceOptions();
  }
}
