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
    },
    {
      code: 'en'
    },
    {
      code: 'fr',
    },
    {
      code: 'es',
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
