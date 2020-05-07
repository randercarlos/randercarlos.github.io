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


@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteMainComponent,
    SiteLoginFormComponent,
    SiteSignupFormComponent,
    SliderComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
