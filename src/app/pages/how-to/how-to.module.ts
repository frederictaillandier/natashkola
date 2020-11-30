import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HowToComponent} from './how-to.component';
import {HowToStepComponent} from './how-to-step/how-to-step.component';
import {CommonModule} from '@angular/common';
import {HowToStepNumberComponent} from './how-to-step/how-to-step-number/how-to-step-number.component';
import {SharedModule} from "../../shared/shared.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    SharedModule,
    CommonModule,
  ]
})
export class HowToModule {
}
