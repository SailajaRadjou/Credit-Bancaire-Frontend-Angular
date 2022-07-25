import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path:'create-client', component: CreateClientComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'client-details/:id', component: ClientDetailsComponent},
  {path: 'comptes', component: CompteListComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
