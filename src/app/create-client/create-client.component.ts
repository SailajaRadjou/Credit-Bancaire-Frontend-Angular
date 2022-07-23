import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../Client/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }
  saveClient(){
    this.clientService.createClient(this.client).subscribe( data => {
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error)
    );
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }
  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }
}
