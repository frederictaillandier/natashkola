import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CoursesFrenchComponent} from './french/courses-french.component';
import {CoursesPresentationComponent} from './presentation/courses-presentation.component';
import {CoursesLevelComponent} from './level/courses-level.component';
import {SharedModule} from '../../shared/shared.module';
import {CoursesVideoHolderComponent} from './video-holder/courses-video-holder.component';
import {CoursesPricesComponent} from './prices/courses-prices.component';
import {CoursesLevelItemComponent} from './level/item/courses-level-item.component';
import {CoursesSpanishComponent} from './spanish/courses-spanish.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    CoursesFrenchComponent,
    CoursesSpanishComponent,
    CoursesPresentationComponent,
    CoursesLevelComponent,
    CoursesVideoHolderComponent,
    CoursesPricesComponent,
    CoursesLevelItemComponent
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
  ],
  exports: [
    CoursesFrenchComponent
  ]
})
export class CoursesModule { }
