//players-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'players', redirectTo: 'players/list', pathMatch: 'full' },
  //Route untuk mengakses list player
  { path: 'players/list', component: ListComponent },
  //Route untuk mengakses detail player
  { path: 'players/:playerId/details', component: DetailsComponent },
  //Route untuk menambah player baru
  { path: 'players/create', component: CreateComponent },
  //Route untuk mengubah data player
  { path: 'players/:playerId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
