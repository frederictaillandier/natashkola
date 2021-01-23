import {LandingComponent} from './landing.component';
import {NgModule} from '@angular/core';
import {LandingMainComponent} from './landing-main/landing-main.component';
import {LandingChooseUsComponent} from './landing-choose-us/landing-choose-us.component';
import {LandingChooseUsItemComponent} from './landing-choose-us/landing-choose-us-item/landing-choose-us-item.component';
import {LandingPinkComponent} from './landing-pink/landing-pink.component';
import {LandingTeacherComponent} from './landing-teacher/landing-teacher.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';

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
        TranslateModule,
        RouterModule,
    ]
})
export class LandingModule {
}
