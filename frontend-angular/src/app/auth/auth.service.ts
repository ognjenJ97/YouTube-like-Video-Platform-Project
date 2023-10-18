import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
import { ChannelsHttpService } from "../channels/channel-http.service";
import { ChannelService } from "../channels/channel.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private channelService: ChannelService ,private http: HttpClient, private router: Router, private channelHttpService: ChannelsHttpService) {}

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password,
    };
    console.log('body : ');
    console.log(body);
    this.http
      .post('http://localhost:8080/api/users/auth', body, {
        responseType: 'text',
      })
      .subscribe(
        (response: any) => {
          console.log('Response:', response);

          try {
            const jwtToken: string = response;
            const jwtDecoded: any = jwt_decode(jwtToken);
            const userId = jwtDecoded.userId;
            localStorage.setItem('jwt', jwtToken);
            localStorage.setItem('role', jwtDecoded.role.authority);
            localStorage.setItem('userId', userId);
            this.router.navigate(['/videos']);
            this.channelHttpService.fetchSingleUserLogIn(userId);
          } catch (error) {
            console.error('Greška prilikom parsiranja JWT:', error);
          }
        },
        (error) => {
          alert('Neuspešna prijava. Proverite korisničko ime i lozinku.');
          console.error(error);
        }
      );
  }

  signin(
    username: string,
    password: string,
    repeatedPassword: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    var params = {
      username: username,
      password: password,
      repeatedPassword: repeatedPassword,
      firstName: firstName,
      lastName: lastName,
      email: email
    };

    this.http.post('http://localhost:8080/api/users', params)
    .subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      }, (error) => {
        alert('Neuspešna registracija. Proverite unete podatke, sva polja moraju biti popunjena');
        console.error(error);
      }
    )
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    this.channelService.clearSingleUserLogIn();
    this.router.navigate(['/login']);
  }
}