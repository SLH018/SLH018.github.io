import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public country: string | undefined;
  @Output() public buttonClick = new EventEmitter<string>();

  public onButtonClick() {
  this.buttonClick.emit(this.country)
  }
}
