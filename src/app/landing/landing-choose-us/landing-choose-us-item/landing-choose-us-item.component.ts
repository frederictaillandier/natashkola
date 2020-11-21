import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-landing-choose-us-item',
  templateUrl: './landing-choose-us-item.component.html',
  styleUrls: ['./landing-choose-us-item.component.scss']
})
export class LandingChooseUsItemComponent {
  @Input()
  public title = 'This is a title';

  @Input()
  public text = 'LoremIpsum';

  @Input()
  public imageUrl: string;
}
