import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {
  }
  showTitle(): boolean{
    return !this.router.url.includes('landing');
  }

}
