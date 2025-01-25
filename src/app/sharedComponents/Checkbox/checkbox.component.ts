import {
    Component,
    ViewEncapsulation,
    HostBinding,
    Input,
  } from "@angular/core";
  
  @Component({
    selector: "app-checkbox",
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [],
    templateUrl: "./checkbox.component.html",
  })
  export class Checkbox {
    @HostBinding("style.display") display = "contents";
  
    constructor() {}
  
    /** Value props */
    @Input() label: string = "Remember Device";
  }
  