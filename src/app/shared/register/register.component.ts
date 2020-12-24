import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  get Mail(): string {
    return environment.contact.mail;
  }
}
