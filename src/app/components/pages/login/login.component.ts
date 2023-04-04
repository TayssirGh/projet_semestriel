import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm : FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username : new FormControl(null, [
        Validators.required,
         Validators.minLength(3)
        ]),
      email : new FormControl(null, [
        Validators.required,
         Validators.email
        ]),
      password : new FormControl(null, [
        Validators.required, 
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,50}$'),
        Validators.maxLength(16),
  
      ]),
      confirmPassword : new FormControl(null, [Validators.required]),
      status : new FormControl('raiser', Validators.required),

    },{
      validators: PasswordValidators.confirmPass,
    });
  }
  get username() { return this.reactiveForm.get('username'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }
  get confirmPassword() { return this.reactiveForm.get('confirmPassword'); }
  get status() { return this.reactiveForm.get('status'); }
  onSubmit() {
    console.log(this.reactiveForm);
  }



}
