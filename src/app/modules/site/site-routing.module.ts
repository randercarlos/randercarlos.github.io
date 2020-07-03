import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteMainComponent } from './__template/site-main/site-main.component';
import { HomeComponent } from './home/home.component';
import { AvailableRoomsComponent } from './available-rooms/available-rooms.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '', component: SiteMainComponent,
      children: [
        { path: '', pathMatch: 'full', component: HomeComponent },
        { path: 'available-rooms', pathMatch: 'full', component: AvailableRoomsComponent },
        { path: 'single-room', pathMatch: 'full', component: SingleRoomComponent },
        { path: 'events', pathMatch: 'full', component: EventsComponent },
        { path: 'event', pathMatch: 'full', component: EventComponent },
        { path: 'blog', pathMatch: 'full', component: BlogComponent },
        { path: 'about', pathMatch: 'full', component: AboutComponent },
        { path: 'event', pathMatch: 'full', component: EventComponent },
        { path: 'contact', pathMatch: 'full', component: ContactComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
