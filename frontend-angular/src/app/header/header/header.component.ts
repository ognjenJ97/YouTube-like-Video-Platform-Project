import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogInId: number;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userLogInId = +localStorage.getItem('userId');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt');
  }

  onLogout() {
    this.authService.logout();
  }

}
