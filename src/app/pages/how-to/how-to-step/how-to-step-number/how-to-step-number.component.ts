import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-how-to-step-number',
  styleUrls: ['./how-to-step-number.component.scss'],
  templateUrl: './how-to-step-number.component.html'
})
export class HowToStepNumberComponent {
  @Input()
  number = 0;

  @Input()
  final = false;
}
