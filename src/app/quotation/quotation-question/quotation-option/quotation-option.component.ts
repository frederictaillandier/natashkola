import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuotationService} from '../../../services/quotation.service';
import {ChoiceConfig} from '../../../dtos/step-config.dto';


@Component({
  selector: 'pm-quotation-option',
  templateUrl: './quotation-option.component.html',
  styleUrls: ['./quotation-option.component.scss',
    '../../quotation.component.css']
})
export class QuotationOptionComponent {

  @Input() optionNumber: number;
  @Input() optionData: ChoiceConfig;

  @Output()
  chosen: EventEmitter<number> = new EventEmitter<number>();

  constructor(private quotationService: QuotationService) {
  }

  selectOption() {
    this.chosen.emit(this.optionNumber);
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

  get label(): string {
    return this.optionData.label;
  }

}
