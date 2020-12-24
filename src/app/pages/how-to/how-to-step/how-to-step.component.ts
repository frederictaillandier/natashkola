import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-how-to-step',
  templateUrl: './how-to-step.component.html',
  styleUrls: ['./how-to-step.component.scss']
})
export class HowToStepComponent {
  @Input()
  inverted = false;

  @Input()
  number = 0;

  @Input()
  title = 'title';

  @Input()
  description = 'LoremIpsum';

  @Input()
  imageUrl: string;

  @Input()
  final = false;
}
