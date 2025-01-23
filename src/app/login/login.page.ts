import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = 'admin';
  password: string = 'admin';

  constructor() { 
    
  }

  ngOnInit() {
  }
  login() {
    //si email = admin y passwrd = admin 
    if (this.email === 'admin' && this.password === 'admin') {
      console.log("login corecto");
    }
    else{
      console.log('login incorecto');
    }
  }

}
