import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;
    const repeatedPassword = form.value.repeatedPassword;
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;

    console.log(username, password, repeatedPassword, firstname, lastname, email);

    if (
      username.trim() === '' ||
      password.trim() === '' ||
      repeatedPassword.trim() === '' ||
      firstname.trim() === '' ||
      lastname.trim() === '' ||
      email.trim() === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if(
      password !== repeatedPassword
  ) {
      alert("Passwords must be the same!")
      return;
  }

  if (firstname.length > 40) {
      alert("firstName is too long")
      return;
  }

  if (lastname.length > 40) {
      alert("lastName is too long")
      return;
  }

  if (username.length > 40) {
      alert("Username is too long")
      return;
  }

  if (email.length > 80) {
      alert("email is too long")
      return;
  }

  this.authService.signin(username, password, repeatedPassword, firstname, lastname, email);

  }



}
