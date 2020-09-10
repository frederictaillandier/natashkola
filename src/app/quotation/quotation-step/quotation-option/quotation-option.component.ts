import {Component, Input} from '@angular/core';
import {ChoiceConfig, QuotationService} from '../../../services/quotation.service';


@Component({
  selector: 'pm-quotation-option',
  templateUrl: './quotation-option.component.html',
  styleUrls: ['./quotation-option.component.css',
    '../../quotation.component.css']
})
export class QuotationOptionComponent {

  @Input() optionNumber: number;
  @Input() optionData: ChoiceConfig;

  constructor(private quotationService: QuotationService) {
  }

  selectOption() {
    this.quotationService.setCurrentOption(this.optionNumber);
    this.quotationService.next();
  }

  get hasPicture(): boolean {
    return this.optionData.imageUrl !== undefined
      && this.optionData.imageUrl !== null
    && this.optionData.imageUrl !== '';
  }

  get pictureUrl(): string {
    return this.optionData.imageUrl;
  }

  get hasName(): boolean {
    return this.optionData.name !== undefined
      && this.optionData.name !== null
      && this.optionData.name !== '';
  }
  get name(): string{
    return this.optionData.name;
  }

  get haslabel(): boolean {
    return this.optionData.label !== undefined
      && this.optionData.label !== null
      && this.optionData.label !== '';
  }

  get label(): string {
    return this.optionData.label;
  }

}
