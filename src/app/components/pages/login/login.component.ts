import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { GetUserService } from 'src/app/services/auth/get/get-user.service';
import { PostUserService } from 'src/app/services/auth/post/post-user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [GetUserService]
})
export class LoginComponent implements OnInit {
  constructor(private service : PostUserService){}
  reactiveForm : FormGroup;
  loginForm : FormGroup;
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
    this.loginForm = new FormGroup({
      emailS : new FormControl(null, [Validators.required,]),
      passwordS : new FormControl(null, [Validators.required,])
    })
  }
  get username() { return this.reactiveForm.get('username'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }
  get confirmPassword() { return this.reactiveForm.get('confirmPassword'); }
  get status() { return this.reactiveForm.get('status'); }
  get loginEmail() { return this.loginForm.get('emailS'); }
  get loginPassword() { return this.loginForm.get('passwordS'); }
  
  onSubmit(form : FormGroup) {
    console.log(form);
  }
  onLoginSubmit(loginDto : {email : String, password: String}){
    this.service.login(loginDto).subscribe(( response )=> {
      console.log(response);
       })
  }




}
