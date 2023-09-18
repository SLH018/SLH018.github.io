import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightCell('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightCell('');
  }

  private highlightCell(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
