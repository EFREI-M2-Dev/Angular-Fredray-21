import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAnswerLetters]'
})
export class AnswerLettersDirective {
  constructor(private el : ElementRef) { }

  @Input('appAnswerLetters') index :number = -1;

  ngAfterViewInit() {
    const letterElm = document.createElement('b');
    letterElm.innerHTML = String.fromCharCode(65 + this.index)+". ";
    this.el.nativeElement.innerHTML = letterElm.outerHTML + this.el.nativeElement.innerHTML;
  }

}
