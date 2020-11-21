import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductModule} from './products/product.module';
import {LandingComponent} from './landing/landing.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LandingTextComponent} from './landing/landing-base/landing-text/landing-text.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {QuotationComponent} from './quotation/quotation.component';
import {QuotationQuestionComponent} from './quotation/quotation-question/quotation-question.component';
import {QuotationOptionComponent} from './quotation/quotation-question/quotation-option/quotation-option.component';
import {QuotationSummaryComponent} from './quotation/quotation-summary/quotation-summary.component';
import {QuotationProcessingComponent} from './quotation/quotation-processing/quotation-processing.component';
import {QuotationResultComponent} from './quotation/quotation-result/quotation-result.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PersonCardComponent} from './about-us/person-card/person-card.component';
import {LandingBaseComponent} from './landing/landing-base/landing-base.component';
import {WhyUsComponent} from './landing/why-us/why-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LanguageSelectionComponent} from './navbar/language-selection/language-selection.component';
import {LandingMainComponent} from './landing/landing-main/landing-main.component';
import {LandingChooseUsComponent} from './landing/landing-choose-us/landing-choose-us.component';
import {LandingChooseUsItemComponent} from './landing/landing-choose-us/landing-choose-us-item/landing-choose-us-item.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuotationComponent,
    QuotationQuestionComponent,
    QuotationOptionComponent,
    QuotationSummaryComponent,
    QuotationProcessingComponent,
    QuotationResultComponent,
    LandingComponent,
    LandingTextComponent,
    NavbarComponent,
    AboutUsComponent,
    PersonCardComponent,
    LandingBaseComponent,
    WhyUsComponent,
    LanguageSelectionComponent,
    LandingMainComponent,
    LandingChooseUsComponent,
    LandingChooseUsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'landing', component: LandingComponent},
      {path: 'quotation', component: QuotationComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'quotation-redirect', component: QuotationProcessingComponent},
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: '**', redirectTo: 'landing', pathMatch: 'full'}
    ]),
    ProductModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
