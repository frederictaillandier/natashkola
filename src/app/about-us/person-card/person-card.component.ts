import {Component, Input} from '@angular/core';


@Component({
  selector: 'pm-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input()
  pictureUrl: string;
  @Input()
  name: string;
  @Input()
  job: string;
  @Input()
  desc: string;


}
