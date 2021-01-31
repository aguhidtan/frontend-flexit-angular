import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { TravelComponent } from './components/travel/travel.component';
import { TravelStepOneComponent } from './components/travel/travel-step-one/travel-step-one.component';
import { TravelStepTwoComponent } from './components/travel/travel-step-two/travel-step-two.component';
import { TravelStepThreeComponent } from './components/travel/travel-step-three/travel-step-three.component';
import { HotelRateComponent } from './components/hotel-rate/hotel-rate.component';
import { TravelResumeComponent } from './components/travel/travel-resume/travel-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpaceshipComponent,
    TravelComponent,
    TravelStepOneComponent,
    TravelStepTwoComponent,
    TravelStepThreeComponent,
    HotelRateComponent,
    TravelResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
