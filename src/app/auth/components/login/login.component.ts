import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth = {
    email: 'admin@localhost.co.id',
    password: 'admin123'
  }

  submitted = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loggedIn(): void {
    
    const data = {
      email: this.auth.email,
      password: this.auth.password,
    };

    this.authService.accessToken()
      .subscribe(
        response => {
          this.authService.setToken(response.data.detail.access_token)
        },
        error => {
          console.log(error);
        });
    
    // console.log(data);
    // console.log(this.authService.getToken());

    this.authService.login(data)
      .subscribe(
        response => {
          // console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
