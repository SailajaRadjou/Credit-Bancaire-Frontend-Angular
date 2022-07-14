import { Component, OnInit } from '@angular/core';
import { Client } from '../Client/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  constructor() { }

  ngOnInit(): void {

    this.clients = [{
      "id": 1,
      "nom": "Rajesh",
      "prenom": "Isha",
      "dateNaissance": "2009-01-16",
      "adresse": "1 rue almonde",
      "tel": "02.74.41.10.86",
      "mail": "isha_rajesh@gmail.com",
      "civilite": "Mlle."
  }]

  }

}
