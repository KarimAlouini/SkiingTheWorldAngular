import { HomeComponent } from './shared/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './shared/logout/logout.component';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { JobOffersComponent } from './hiering/job-offers/job-offers.component';
import { OfferDetailsComponent } from './hiering/offer-details/offer-details.component';
import { OfferCardComponent } from './hiering/offer-card/offer-card.component'
import { EventListingComponent } from './event/event-listing/event-listing.component';
import { EventCardComponent } from './event/event-card/event-card.component';
import { EventCardDetailComponent } from './event/event-card-detail/event-card-detail.component';
import { UtilService } from './services/util.service';
import { eventService } from './services/event.service';
import {ProfileComponent} from './shared/profile/profile.component';
import { PersonalComponent } from './shared/profile/personal/personal.component';
import { SecurityComponent } from './shared/profile/security/security.component';
import { EventsInvitationsComponent } from './shared/profile/events-invitations/events-invitations.component';
import { EventsParticipationsComponent } from './shared/profile/events-participations/events-participations.component';
import { MyAdAreaRequestsComponent } from './shared/profile/my-ad-area-requests/my-ad-area-requests.component';
import {DatePickerModule} from 'angular-io-datepicker';
export const URL='http://localhost:18080/SkiWorld-web/';
export const BASE_URL = URL+'v0/';
export const USER_IMAGE_DIR =URL+'/resources/users/';
import { EventAddComponent } from './event/event-add/event-add.component';
import { MyEventsComponent } from './shared/profile/my-events/my-events.component';
import { LodgingListingComponent } from './lodging/lodging-listing/lodging-listing.component';
import { LodgingService } from './services/lodging.service';
import { LodgingDetailComponent } from './lodging/lodging-detail/lodging-detail.component';
export const routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegistrationComponent},
  {path:'confirm/:code',component:ConfirmationComponent},
  {path:'event',component:EventListingComponent},
  {path:'event/show/:id',component:EventCardDetailComponent},
  {path:'offersDetails/:id',component:OfferDetailsComponent},
  {path:'profile',component:ProfileComponent,children:[
      {path:'informations',component:PersonalComponent},
      {path:'security',component:SecurityComponent},
      {path:'myinvitations',component:EventsInvitationsComponent},
      {path:'myevents',component:MyEventsComponent},
      {path:'myparticipations',component:EventsParticipationsComponent},
      {path:'adarequests',component:MyAdAreaRequestsComponent}
    ]},
  {path:'jobOffers',component:JobOffersComponent},
  {path:'jobOffers/show/:id',component:OfferDetailsComponent},
  {path:'event/add',component:EventAddComponent},
  {path:'lodging',component:LodgingListingComponent},
  {path:'lodging/:id',component:LodgingDetailComponent},
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
    ProfileComponent,
    PersonalComponent,
    SecurityComponent,
    EventsInvitationsComponent,
    EventsParticipationsComponent,
    MyAdAreaRequestsComponent,
    EventCardDetailComponent,
    EventAddComponent,
    MyEventsComponent,
    LodgingListingComponent,
    LodgingDetailComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxPaginationModule,
    ReCaptchaModule,
    DatePickerModule
  ],
  providers: [   LodgingService,
    eventService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
