import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginapiService } from 'src/app/services/loginapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private loginapi: LoginapiService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginapi.login(this.username, this.password).subscribe((res) => {
      console.log('Login successful');
      this.router.navigate(['/home']);
    });
  }
}
