import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-courses-presentation',
  styleUrls: ['./courses-presentation.component.scss'],
  templateUrl: './courses-presentation.component.html'
})
export class CoursesPresentationComponent {
  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  image: string;
}
