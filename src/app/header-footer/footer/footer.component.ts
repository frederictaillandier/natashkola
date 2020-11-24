import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'pm-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  get PhoneNumber(): string {
    return environment.contact.phone;
  }

  get Mail(): string {
    return environment.contact.mail;
  }

}
