import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../login-service.service';
import { CustomValidator } from '../../../custom-validator';
import { ValidationMessages } from '../../../validation-messages';
import { Inputs } from '../../../sharedComponents/Input/Input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../../sharedComponents/Button/Button.component';
import { Checkbox } from '../../../sharedComponents/Checkbox/checkbox.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Inputs, Button, Checkbox], // Correct imports
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService
  ) {
    this.signInForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.email,
          CustomValidator.emailValidator(),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          CustomValidator.passwordValidator(),
        ],
      ],
    });
  }

  ngOnInit(): void {
    // Adding extra controls dynamically if needed
    this.signInForm.addControl('inputField', new FormControl(''));
  }

  // Method to check if a control has errors
  hasError(controlName: string): boolean {
    const control = this.signInForm.get(controlName);
    return (control?.invalid && control?.touched) ?? false;
  }

  // Method to get dynamic hint text based on control errors
  getHintText(controlName: string): string {
    const control = this.signInForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required.';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength']?.requiredLength;
      return `Password must be at least ${minLength} characters long.`;
    }
    if (control?.hasError('customPasswordValidator')) {
      return 'Password must include at least one uppercase letter, one number, and one special character.';
    }
    return '';
  }

  // Method for form submission
  onSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Form Submitted:', this.signInForm.value);
      this.loginService.showSignInScreen.emit(false);
      this.loginService.showOtpVerificationScreen.emit(true);
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to handle forgot password click
  forgotPasswordClicked(): void {
    this.loginService.showSignInScreen.emit(false);
    this.loginService.showOtpVerificationScreen.emit(false);
    this.loginService.showForgotPasswordScreen.emit(true);
  }

  items = [1, 2, 3, 4]; // Example array
  
  handleKeydown(event: KeyboardEvent, index: number): void {
    console.log('Key pressed:', event.key);
    console.log('Index:', index);
  }
  
  
}
