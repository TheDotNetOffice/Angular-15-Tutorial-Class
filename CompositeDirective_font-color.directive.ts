import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFontColor]',
  standalone: true
})
export class FontColorDirective {

  @Input() color = 'red';
  constructor(private element : ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.color= this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.color= 'black';
  }
}
