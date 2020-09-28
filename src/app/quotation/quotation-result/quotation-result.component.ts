import {Component, EventEmitter} from '@angular/core';
import {IQuotationStep} from '../iquotation-step';
import { environment } from '../../../environments/environment';
import {QuotationService} from '../../services/quotation.service';
import {CourseDto} from '../../dtos/course.dto';



@Component({
  selector: 'pm-quotation-result',
  templateUrl: './quotation-result.component.html',
  styleUrls: ['./quotation-result.component.css',
              '../quotation.component.css']
})
export class QuotationResultComponent implements IQuotationStep {
  nextStep: EventEmitter<number> = new EventEmitter<number>();
  private availableCourses: CourseDto[];


  constructor(private _quotationService: QuotationService) {
    this._quotationService.getAvailableCourses().subscribe(result => this.availableCourses = result.map(x =>
    {
      const item = x;
      // we need to convert json Date as proper Date
      item.start = new Date(x.start);
      item.end = new Date(x.end);
      return item;
    }));
  }


  get PhoneNumber(): string {
    return environment.contact.phone;
  }

  get Mail(): string {
    return environment.contact.mail;
  }

  get AvailableCourses(): CourseDto[] {
    return this.availableCourses;
  }

  getDate(date: Date): number {
    return date.getDate();
  }

  getMonth(date: Date): number {
    return date.getMonth();
  }

}
