import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-courses-level-item',
  styleUrls: ['courses-level-item.component.scss'],
  templateUrl: 'courses-level-item.component.html'
})
export class CoursesLevelItemComponent {
  @Input()
  description: string;

  @Input()
  circleColor: string;

  @Input()
  title: string;
}
