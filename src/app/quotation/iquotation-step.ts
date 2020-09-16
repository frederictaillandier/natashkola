import {EventEmitter, Output} from '@angular/core';

export interface IQuotationStep {

  nextStep: EventEmitter<number>;
}
