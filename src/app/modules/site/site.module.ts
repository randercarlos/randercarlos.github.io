import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteHeaderComponent } from './__template/site-header/site-header.component';
import { SiteFooterComponent } from './__template/site-footer/site-footer.component';
import { SiteMainComponent } from './__template/site-main/site-main.component';
import { SiteLoginFormComponent } from './__template/site-login-form/site-login-form.component';
import { SiteSignupFormComponent } from './__template/site-signup-form/site-signup-form.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CheckAvailabilityComponent } from './home/check-availability/check-availability.component';
import { FeaturedRoomsComponent } from './home/featured-rooms/featured-rooms.component';
import { YourStayComponent } from './home/your-stay/your-stay.component';
import { OurNewsEventsComponent } from './home/our-news-events/our-news-events.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { TestemonialComponent } from './home/testemonial/testemonial.component';
import { NewsletterSignupComponent } from './home/newsletter-signup/newsletter-signup.component';
import { AvailableRoomsComponent } from './available-rooms/available-rooms.component';
import { DetailPageBackComponent } from './available-rooms/detail-page-back/detail-page-back.component';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleRoomComponent } from './single-room/single-room.component';


@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteMainComponent,
    SiteLoginFormComponent,
    SiteSignupFormComponent,
    SliderComponent,
    HomeComponent,
    SliderComponent,
    CheckAvailabilityComponent,
    FeaturedRoomsComponent,
    YourStayComponent,
    OurNewsEventsComponent,
    OurServicesComponent,
    TestemonialComponent,
    NewsletterSignupComponent,
    AvailableRoomsComponent,
    DetailPageBackComponent,
    BookingComponent,
    EventsComponent,
    EventComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    SingleRoomComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
