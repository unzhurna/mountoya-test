import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   auth = {
    user_name : 'admin',
    password: 'admin123',
  }

  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbW91bnRveWF0ZXN0LjAwMHdlYmhvc3RhcHAuY29tXC9wdWJsaWNcL2F1dGgiLCJpYXQiOjE2MzYwMDAyMjksImV4cCI6MTYzNjAwMzgyOSwibmJmIjoxNjM2MDAwMjI5LCJqdGkiOiJNTmNPNFZKdjcyS3BJQjVBIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.oCS93rQWRhhvdqytzwmVeyFCRNGVxpgmswEAtTZKRJs";

   user = {
            id_admin: 1,
            user_name: "admin"
        }

  submitted = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loggedIn(): void {
    const data = {
      user_name: this.auth.user_name,
      password: this.auth.password,
    };

     this.authService.setToken('sadasdas');
     this.authService.setUser(this.user);

     console.log( this.authService.getToken());


    // this.authService.login(data)
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

}
