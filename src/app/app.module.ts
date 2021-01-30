import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { TravelComponent } from './components/travel/travel.component';
import { TravelStepOneComponent } from './components/travel/travel-step-one/travel-step-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpaceshipComponent,
    TravelComponent,
    TravelStepOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
