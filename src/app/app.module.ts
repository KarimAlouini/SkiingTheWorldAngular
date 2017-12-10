import { HomeComponent } from './shared/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './shared/logout/logout.component';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { JobOffersComponent } from './hiering/job-offers/job-offers.component';
import { OfferDetailsComponent } from './hiering/offer-details/offer-details.component';
import { OfferCardComponent } from './hiering/offer-card/offer-card.component'
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventCardDetailComponent } from './event-card-detail/event-card-detail.component';
import { UtilService } from './services/util.service';
import { eventService } from './services/event.service';
import { Top5Component } from './hiering/offer-details/top5/top5.component';
import { NewArrivalComponent } from './hiering/offer-details/new-arrival/new-arrival.component';
export const BASE_URL = "http://localhost:18080/SkiWorld-web/v0/";
export const routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'logout',component:LogoutComponent,pathMatch: 'full'},
  {path:'register',component:RegistrationComponent,pathMatch: 'full'},
  {path:'confirm/:code',component:ConfirmationComponent,pathMatch: 'full'},
  {path:'events',component:EventListingComponent,pathMatch: 'full'},
  {path:'events/show/:id',component:EventCardDetailComponent,pathMatch: 'full'},
  {path:'confirm/:code',component:ConfirmationComponent,pathMatch: 'full'},
  {path:'jobOffers',component:JobOffersComponent,pathMatch: 'full'},
  {path:'jobOffers/show/:id',component:OfferDetailsComponent,pathMatch: 'full'},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    HomeComponent,
    ConfirmationComponent,
    RegistrationComponent,
    JobOffersComponent,
    OfferDetailsComponent,
    OfferCardComponent,
    RegistrationComponent,
    EventListingComponent,
    EventCardComponent,
    EventCardDetailComponent,
    Top5Component,
    NewArrivalComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    eventService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
