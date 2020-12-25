import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'pm-language-selection',
  templateUrl: './language-selection.component.html'
})
export class LanguageSelectionComponent {

  languages = [
    {
      code: 'ru',
      name: 'Русски'
    },
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'fr',
      name: 'Français'
    },
    {
      code: 'es',
      name: 'Español'
    },
  ];

  currentLanguageIndex = 0;

  get currentLanguageCode(){
    return this.languages[this.currentLanguageIndex].code;
  }

  constructor(private translate: TranslateService) {
  }
  languageSelected(index: number): any {
    this.currentLanguageIndex = index;
    this.translate.use(this.languages[index].code);
  }

}
