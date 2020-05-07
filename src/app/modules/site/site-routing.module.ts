import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteMainComponent } from './__template/site-main/site-main.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: SiteMainComponent,
      children: [
        { path: '', pathMatch: 'full', component: HomeComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
