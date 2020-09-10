import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductModule} from './products/product.module';
import {LandingComponent} from './landing/landing.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LandingTextComponent} from './landing/landing-text/landing-text.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LandingComponent,
    LandingTextComponent,
    NavbarComponent
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
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: '**', redirectTo: 'landing', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
