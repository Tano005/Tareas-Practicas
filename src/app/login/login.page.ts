import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = 'admin';
  password: string = 'admin';

  constructor(
    private navController: NavController,
  ) { 
    
  }

  ngOnInit() {
  }
  login(formulario: NgForm) {
    //obtener valores del formulario
    console.log(formulario.value);

    //Validar formulario
    console.log('Valid', formulario.valid);

    //si formulario es invalido
    //console.log('Todos los campos son requeridos');

    if (formulario.valid == false) {
      console.log('Todos los campos son reuqeridos');
      return;
    }

    //si email = admin y passwrd = admin 
    if (this.email === 'admin' && this.password === 'admin') {
      this.navController.navigateForward('/home');
    }
    else{
      console.log('login incorecto');
    }
  }

}
