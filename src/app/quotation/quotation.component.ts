import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef, OnDestroy, OnInit, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {QuotationService} from '../services/quotation.service';
import {QuotationProcessingComponent} from './quotation-processing/quotation-processing.component';
import {IQuotationStep} from './iquotation-step';
import {QuotationQuestionComponent} from './quotation-question/quotation-question.component';
import {QuotationResultComponent} from './quotation-result/quotation-result.component';

@Component({
  templateUrl: './quotation.component.html'
})
export class QuotationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('quotationContainer', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<IQuotationStep>;

  _currentStepNumber = 0;
  _stepComponents = [QuotationQuestionComponent,
    QuotationProcessingComponent,
    QuotationResultComponent];

  constructor(private quotationService: QuotationService,
              private resolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.createComponent(this._stepComponents[this._currentStepNumber]);
  }

  nextStep() {
    this._currentStepNumber++;
    this.createComponent(this._stepComponents[this._currentStepNumber]);
  }

  createComponent(comp: Type<IQuotationStep>) {
    this.container.clear();
    const factory: ComponentFactory<IQuotationStep> =
      this.resolver.resolveComponentFactory(comp);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.nextStep.subscribe(x => this.nextStep());
    this.componentRef.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

  get loading(): boolean {
    return this.quotationService.loading;
  }
}
