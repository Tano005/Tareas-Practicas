import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  chats: any[] =[
    {
      username: "Abuelita",
      message: "↗ Hoy, 3:48p. m.",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
  ]

  constructor() {}

}
