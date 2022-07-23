import { Component, OnInit } from '@angular/core';
import { Client } from '../Client/client';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  client: Client = new Client();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
