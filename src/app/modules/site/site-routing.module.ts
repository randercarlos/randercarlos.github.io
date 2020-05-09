import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteMainComponent } from './__template/site-main/site-main.component';
import { HomeComponent } from './home/home.component';
import { AvailableRoomsComponent } from './available-rooms/available-rooms.component';


const routes: Routes = [
  {
    path: '', component: SiteMainComponent,
      children: [
        { path: '', pathMatch: 'full', component: HomeComponent },
        { path: 'available-rooms', pathMatch: 'full', component: AvailableRoomsComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
