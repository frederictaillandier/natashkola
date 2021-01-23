import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HowToComponent} from './how-to.component';
import {HowToStepComponent} from './how-to-step/how-to-step.component';
import {CommonModule} from '@angular/common';
import {HowToStepNumberComponent} from './how-to-step/how-to-step-number/how-to-step-number.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    HowToComponent,
    HowToStepComponent,
    HowToStepNumberComponent
  ],
  exports: [
    HowToComponent
  ],
  imports: [
    TranslateModule,
    SharedModule,
    CommonModule,
  ]
})
export class HowToModule {
}
