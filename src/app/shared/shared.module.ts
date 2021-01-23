import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule} from '@ngx-translate/core';
import {RegisterComponent} from './register/register.component';

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
