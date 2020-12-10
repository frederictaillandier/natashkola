import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {RegisterComponent} from './register/register.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    RegisterComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
