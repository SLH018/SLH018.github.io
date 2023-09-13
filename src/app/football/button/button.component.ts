import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LowerCasePipe, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
