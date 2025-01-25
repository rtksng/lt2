import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: './Button.component.html',
})
export class Button {
  @HostBinding('style.display') display = 'contents';
  @Input() label: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Output() eventEmitter = new EventEmitter<Event>();
  handleEvent(event: Event) {
    this.eventEmitter.emit(event);
  }
}
