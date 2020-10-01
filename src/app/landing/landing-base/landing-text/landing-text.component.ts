import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {QuotationService} from '../../../services/quotation.service';

@Component({
  selector: 'pm-landing-text',
  templateUrl: './landing-text.component.html',
  styleUrls: ['./landing-text.component.scss']
})
export class LandingTextComponent {
  constructor(private router: Router,
              private quotationService: QuotationService) {
  }

  quotationClick() {
    this.quotationService.resetChoices();
    this.router.navigateByUrl('/quotation').then();
  }

  get SchoolName() {
    return environment.contact.name;
  }
}
