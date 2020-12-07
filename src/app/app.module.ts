import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {NavbarComponent} from './header-footer/navbar/navbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LanguageSelectionComponent} from './header-footer/navbar/language-selection/language-selection.component';
import {FooterComponent} from './header-footer/footer/footer.component';
import {LandingModule} from './pages/landing/landing.module';
import {HowToModule} from './pages/how-to/how-to.module';
import {HowToComponent} from './pages/how-to/how-to.component';
import {SharedModule} from './shared/shared.module';
import {CoursesModule} from './pages/courses/courses.module';
import {CoursesFrenchComponent} from "./pages/courses/french/courses-french.component";
import {CoursesSpanishComponent} from "./pages/courses/spanish/courses-spanish.component";


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageSelectionComponent,
    FooterComponent
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
      {path: 'landing', component: LandingComponent},
      {path: 'about-us', component: LandingComponent},
      {path: 'how-to', component: HowToComponent},
      {path: 'french', component: CoursesFrenchComponent},
      {path: 'spanish', component: CoursesSpanishComponent},
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: '**', redirectTo: 'landing', pathMatch: 'full'},
    ], {scrollPositionRestoration: 'enabled'}
    ),
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    LandingModule,
    HowToModule,
    CoursesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
