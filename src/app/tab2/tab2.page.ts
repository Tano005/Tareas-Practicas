import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit{
  chats: any[] =[
    {
      username: "Mi estado",
      message: "añade actualizacion",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
  ]

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
