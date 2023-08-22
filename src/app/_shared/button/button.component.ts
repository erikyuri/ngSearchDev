import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() label = '';
  @Input() buttonStyle = {};
  @Output() buttonEvent = new EventEmitter<any>

  clickButton() {
    this.buttonEvent.emit();
  }
}
