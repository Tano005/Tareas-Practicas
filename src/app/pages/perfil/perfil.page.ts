import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false 
})
export class PerfilPage {
  // Datos iniciales del perfil
  nombre: string = 'Jhonatan';
  info: string = 'Desarrollador de software';
  telefono: string = '123456789';
  avatarUrl: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  constructor(private router: Router) {}

  // Función para cambiar la foto de perfil (aquí solo logueamos el cambio)
  cambiarFoto() {
    console.log('Cambiar foto de perfil');
    // Aquí podrías agregar lógica para cambiar la foto, por ejemplo, usando un picker de imágenes
  }

  // Función para guardar los cambios en el perfil
  guardarCambios() {
    console.log('Perfil actualizado:', {
      nombre: this.nombre,
      info: this.info,
      telefono: this.telefono,
      avatarUrl: this.avatarUrl
    });

    // Aquí puedes guardar los datos, por ejemplo, en una base de datos o almacenamiento local
    this.router.navigate(['/']); // Redirige a la página principal después de guardar
  }
}
