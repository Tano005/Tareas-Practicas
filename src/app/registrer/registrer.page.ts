import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['./registrer.page.scss'],
  standalone: false,
})
export class RegistrerPage implements OnInit {

  nombre: string = 'Jhonatan Victoria';
  ciudad: string = 'Cordoba';
  pais: string = 'Mexico';
  email: string = 'Jhoanatan@gmail.com';
  password: string = '12345';

  constructor(
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  registro(formulario: NgForm){
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
    if (this.nombre === 'Jhonatan Victoria' 
      && this.ciudad === 'Cordoba' 
      && this.pais === 'Mexico'
      && this.email === 'Jhoanatan@gmail.com'
      && this.password === '12345') {
      this.navController.navigateForward('/home');
    }
    else{
      console.log('login incorecto');
    }

  }

}
