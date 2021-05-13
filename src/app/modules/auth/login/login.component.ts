import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  config = {
    title: 'Sign in',
    registerTab: 'Need an account?',
    form: {
      username: {
        label: 'username:',
        id: 'username',
        placeholder: 'USERNAME',
      },
      password: {
        label: 'password:',
        id: 'password',
        placeholder: 'PASSWORD',
      }
    }
  };

  signInForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.signIn(
      {
        email: this.signInForm.value.username,
        password: this.signInForm.value.password,
      },
    );
  }
}
