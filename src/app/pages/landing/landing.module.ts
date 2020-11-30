import {LandingComponent} from './landing.component';
import {NgModule} from '@angular/core';
import {LandingMainComponent} from './landing-main/landing-main.component';
import {LandingChooseUsComponent} from './landing-choose-us/landing-choose-us.component';
import {LandingChooseUsItemComponent} from './landing-choose-us/landing-choose-us-item/landing-choose-us-item.component';
import {LandingPinkComponent} from './landing-pink/landing-pink.component';
import {LandingTeacherComponent} from './landing-teacher/landing-teacher.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from '../../shared/shared.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    LandingComponent,
    LandingMainComponent,
    LandingChooseUsComponent,
    LandingChooseUsItemComponent,
    LandingPinkComponent,
    LandingTeacherComponent
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
  ]
})
export class LandingModule {
}
