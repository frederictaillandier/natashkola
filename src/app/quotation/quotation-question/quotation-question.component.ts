import {Component, EventEmitter, Output} from '@angular/core';
import {QuotationService} from '../../services/quotation.service';
import {IQuotationStep} from '../iquotation-step';
import {ChoiceConfig} from '../../dtos/step-config.dto';

@Component({
  selector: 'pm-quotation-step',
  templateUrl: './quotation-question.component.html',
  styleUrls: ['./quotation-question.component.css',
    '../quotation.component.css']
})
export class QuotationQuestionComponent implements IQuotationStep {

  constructor(private quotationService: QuotationService) {
     this.quotationService.setCurrentQuestion(0);
  }

  @Output()
  nextStep: EventEmitter<number> = new EventEmitter<number>();

  onChooseOption(opt: number) {
    this.quotationService.setCurrentOption(opt);
    this.quotationService.getAvailableCourses().subscribe(result => {
      this.quotationService.nextQuestion();
      if (!this.quotationService.hasQuestionsLeft() || result.length < 0) {
        this.nextStep.emit(0);
      }
    });
  }

  getCurrentQuestion(): string {
    return this.quotationService.getCurrentQuestion();
  }

  getCurrentChoices(): ChoiceConfig[] {
    return this.quotationService.getCurrentChoiceOptions();
  }
}
