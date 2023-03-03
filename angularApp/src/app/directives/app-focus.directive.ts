import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appAppFocus]'
})
export class AppFocusDirective implements OnInit{

  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}
