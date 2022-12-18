import { Directive } from '@angular/core';
import { BackgroundColorDirective } from './background-color.directive';
import { ItalicsFontDirective } from './italics-font.directive';

@Directive({
  selector: '[appMouseHover]',
  standalone: true,
  hostDirectives:[
    {
      directive: ItalicsFontDirective,
      outputs: ['hover']
    },
    {
      directive: BackgroundColorDirective,
      inputs:['color:abc']
    }
  ]
})
export class MouseHoverDirective {

  constructor() { }

}
