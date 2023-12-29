import {Input, Output, EventEmitter, Directive, HostBinding, HostListener, SimpleChange} from '@angular/core'

@Directive({
  selector: '[appExtend]'
})
export class ExtendDirective {

  possibleColor1 = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod'
  ];

  possibleColor2 = [
    'peachpuff', 'mediumspringgreen', 'cornflowerblue', 'blanchedalmond'
  ];


  @HostListener('keydown')
  newColor() {
    const color1 = Math.floor(Math.random() * this.possibleColor1.length);
    const color2 = Math.floor(Math.random() * this.possibleColor2.length);

    this.background = this.possibleColor1[color1];
    this.color = this.possibleColor2[color2];
  }

  @HostBinding('style.background') background: string = '';
  @HostBinding('style.color') color: string = '';
}
