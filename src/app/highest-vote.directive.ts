import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'rgba(249, 165, 49, 0.2)';
  }

}
