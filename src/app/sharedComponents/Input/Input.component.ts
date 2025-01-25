import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './Input.component.html',
})
export class Inputs implements OnInit {
  @HostBinding('style.display') display = 'contents';
  @Input() hint: boolean = false;
  @Input() hintText: string = '';
  @Input() label: string = '';
  @Input() email: string = '';
  @Input() placeholder: string = '';
  @Input() chips: boolean = false;
  @Input() danger: boolean = false;
  @Input() filled: boolean = false;
  @Input() success: boolean = false;
  @Input() warning: boolean = false;
  @Input() disabled: boolean = false;
  @Input() inputType: string = '';
  @Input() for: string = '';
  @Input() controlName: string = '';
  @Input() parentForm!: FormGroup;
  @Input() maxlength: number | null = null;
  @Input() keydownHandler?: (event: KeyboardEvent) => void;
  @Input() keyupHandler?: (event: KeyboardEvent) => void;
  @Input() keypressHandler?: (event: KeyboardEvent) => void;
  @Input() clickHandler?: (event: MouseEvent) => void;
  @Input() dblclickHandler?: (event: MouseEvent) => void;
  @Input() mousedownHandler?: (event: MouseEvent) => void;
  @Input() mouseupHandler?: (event: MouseEvent) => void;
  @Input() mouseenterHandler?: (event: MouseEvent) => void;
  @Input() mouseleaveHandler?: (event: MouseEvent) => void;
  @Input() mouseoverHandler?: (event: MouseEvent) => void;
  @Input() mouseoutHandler?: (event: MouseEvent) => void;
  @Input() focusHandler?: (event: FocusEvent) => void;
  @Input() blurHandler?: (event: FocusEvent) => void;
  @Input() inputHandler?: (event: Event) => void;
  @Input() changeHandler?: (event: Event) => void;
  @Input() dragHandler?: (event: DragEvent) => void;
  @Input() dragstartHandler?: (event: DragEvent) => void;
  @Input() dragendHandler?: (event: DragEvent) => void;
  @Input() dragoverHandler?: (event: DragEvent) => void;
  @Input() dragleaveHandler?: (event: DragEvent) => void;
  @Input() dropHandler?: (event: DragEvent) => void;
  @Input() scrollHandler?: (event: Event) => void;
  @Input() wheelHandler?: (event: WheelEvent) => void;
  ngOnInit(): void {}
  @Output() eventEmitter = new EventEmitter<Event>();
  handleEvent(event: Event) {
    this.eventEmitter.emit(event);
  }
}
