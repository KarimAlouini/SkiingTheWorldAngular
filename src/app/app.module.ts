import { HomeComponent } from './shared/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventCardDetailComponent } from './event-card-detail/event-card-detail.component';
import { UtilService } from './services/util.service';
import { eventService } from './services/event.service';
import {ProfileComponent} from './shared/profile/profile.component';
export const BASE_URL = 'http://localhost:18080/SkiWorld-web/v0/';
export const routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegistrationComponent},
  {path:'confirm/:code',component:ConfirmationComponent},
  {path:'events',component:EventListingComponent},
  {path:'events/show/:id',component:EventCardDetailComponent},
  {path:'offersDetails/:id',component:OfferDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'jobOffers',component:JobOffersComponent},
  {path:'jobOffers/show/:id',component:OfferDetailsComponent}
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
    ProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxPaginationModule,
    ReCaptchaModule
  ],
  providers: [
    eventService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
