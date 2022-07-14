import { Component, OnInit } from '@angular/core';
import { Client } from '../Client/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.getClients();

  }

  private getClients(){
    this.clientService.getClientList().subscribe(data => {
      this.clients = data;
    });
  }

}
