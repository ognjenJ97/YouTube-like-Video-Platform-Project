import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    console.log(username, password)
    this.authService.login(username, password);

  }

}
