import { HomeComponent } from './shared/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './shared/logout/logout.component';
import { ConfirmationComponent } from './shared/confirmation/confirmation.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { JobOffersComponent } from './hiering/job-offers/job-offers.component';
import { OfferDetailsComponent } from './hiering/offer-details/offer-details.component';
import { OfferCardComponent } from './hiering/offer-card/offer-card.component'
export const BASE_URL = "http://localhost:18080/SkiWorld-web/v0/";
export const routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegistrationComponent},
  {path:'confirm/:code',component:ConfirmationComponent},
  {path:'jobOffers',component:JobOffersComponent},
  {path:'offersDetails/:id',component:OfferDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    HomeComponent,
    ConfirmationComponent,
    RegistrationComponent,
    JobOffersComponent,
    OfferDetailsComponent,
    OfferCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
