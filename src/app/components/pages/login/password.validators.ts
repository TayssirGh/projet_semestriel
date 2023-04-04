import { AbstractControl } from '@angular/forms';
export class PasswordValidators {
  static confirmPass(control: AbstractControl) {
    let newPassword = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    if (newPassword.value !== confirmPassword.value)
      return { confirmPass: true };
    return null;
  }
} 