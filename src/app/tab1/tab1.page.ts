import { Component, OnInit, ViewChild } from '@angular/core';
import { IonPopover } from '@ionic/angular';
import { Router } from '@angular/router';  // Asegúrate de importar Router

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  @ViewChild(IonPopover) popover!: IonPopover; // Referencia al Popover

  chats: any[] = [
    {
      username: "Carlos",
      message: "Profe, ¿cuál es la tarea de hoy?",
      date: "2:30",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Luis",
      message: "Ya entregamos el proyecto",
      date: "3:45",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Ana",
      message: "Profesor, tengo una duda en el ejercicio 5",
      date: "5:15",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "María",
      message: "Profe, ¿puede revisar mi ensayo?",
      date: "1:50",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "José",
      message: "Terminamos la presentación, ¿la revisa?",
      date: "6:10",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Fernanda",
      message: "Ya estamos en clase",
      date: "7:00",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Pedro",
      message: "¿Podemos entregar mañana?",
      date: "4:20",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Daniel",
      message: "Profe, el video no carga",
      date: "8:05",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Andrea",
      message: "¿Podemos hacer equipo de tres?",
      date: "9:10",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Gabriel",
      message: "La clase estuvo muy buena hoy",
      date: "10:00",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Lucía",
      message: "¿Podemos adelantar el examen?",
      date: "11:30",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Ricardo",
      message: "Olvidé mi cuaderno, ¿puedo tomar fotos?",
      date: "12:45",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Valeria",
      message: "¿Podría repetir la explicación?",
      date: "2:00",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Sofía",
      message: "Ya dejé la tarea en la plataforma",
      date: "3:25",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Hugo",
      message: "Profe, ¿qué tema veremos mañana?",
      date: "4:40",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "David",
      message: "Se fue la luz en mi casa, ¿qué hago?",
      date: "5:55",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Mónica",
      message: "No encontré el archivo en la nube",
      date: "6:30",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Pablo",
      message: "¿Podemos tener una asesoría extra?",
      date: "7:45",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Karina",
      message: "Maestro, mi micrófono no funciona",
      date: "8:50",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Sebastián",
      message: "El link no abre, ¿puede mandarlo de nuevo?",
      date: "9:15",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Renata",
      message: "¿Hay clase el viernes?",
      date: "10:20",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Francisco",
      message: "Ya imprimí el reporte",
      date: "11:10",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Isabela",
      message: "No entendí el punto 3, ¿me ayuda?",
      date: "12:25",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Tomás",
      message: "La actividad estaba muy difícil",
      date: "1:35",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Natalia",
      message: "¿Habrá recuperación de notas?",
      date: "2:50",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Emiliano",
      message: "Profe, ¿puedo enviar el trabajo por correo?",
      date: "3:05",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Alejandra",
      message: "No me llegó el correo con las instrucciones",
      date: "4:25",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Diego",
      message: "¿Podemos tener una clase extra?",
      date: "5:50",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Beatriz",
      message: "La plataforma está caída",
      date: "6:15",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Joaquín",
      message: "Ya me registré en el sistema",
      date: "7:30",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    }
  ];

  constructor(private router: Router) { }  // Inyectar Router

  ngOnInit() { }

  // Función para abrir el popover
  openPopover(event: Event) {
    this.popover.event = event;
    this.popover.isOpen = true;
  }

  // Función para editar perfil
  editarPerfil() {
    console.log('Editar perfil');
    this.popover.isOpen = false;
    this.router.navigate(['/perfil']);  // Redirige a la página de perfil
  }

  // Función para cerrar sesión
  cerrarSesion() {
    console.log('Cerrar sesión');
    this.popover.isOpen = false;
    // Aquí puedes agregar la lógica para cerrar sesión
  }
}
