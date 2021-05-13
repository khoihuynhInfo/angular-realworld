import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  config = {
    title: 'Sign up',
    registerTab: 'Have an account?',
    form: {
      username: {
        label: 'username: ',
        id: 'username',
        placeholder: 'USERNAME',
      },
      email: {
        label: 'email: ',
        id: 'email',
        placeholder: 'EMAIL'
      },
      password: {
        label: 'password p: ',
        id: 'password',
        placeholder: 'PASSWORD',
      }
    }
  };

  signInForm = this.formBuilder.group({
    username: '',
    email: '',
    password: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {

  }

}
