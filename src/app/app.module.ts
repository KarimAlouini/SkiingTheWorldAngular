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
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventCardDetailComponent } from './event-card-detail/event-card-detail.component';
import { UtilService } from './services/util.service';
import { eventService } from './services/event.service';
export const BASE_URL = "http://localhost:18080/SkiWorld-web/v0/";
export const routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegistrationComponent},
  {path:'confirm/:code',component:ConfirmationComponent}
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
    EventListingComponent,
    EventCardComponent,
    EventCardDetailComponent
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
