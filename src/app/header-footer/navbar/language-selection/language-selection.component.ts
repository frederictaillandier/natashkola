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
      codeCapital: 'Ru',
      name: 'Русски'
    },
    {
      code: 'en',
      codeCapital: 'En',
      name: 'English'
    },
    {
      code: 'fr',
      codeCapital: 'Fr',
      name: 'Français'
    },
    {
      code: 'es',
      codeCapital: 'Es',
      name: 'Español'
    },
  ];

  currentLanguageIndex = 0;

  get currentLanguageCode(){
    return this.languages[this.currentLanguageIndex].codeCapital;
  }

  constructor(private translate: TranslateService) {
  }
  languageSelected(index: number): any {
    this.currentLanguageIndex = index;
    this.translate.use(this.languages[index].code);
  }

}
