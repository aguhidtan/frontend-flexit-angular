import { Component, OnInit } from '@angular/core';
import { TravelRequest } from '../../models/travel-request.model';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html'
})
export class TravelComponent implements OnInit {

  step = 1;
  travelRequest = new TravelRequest();

  constructor() { 
    this.travelRequest.travelDate = new Date();
  }

  ngOnInit(): void {
  }

  goToNextStep(body: TravelRequest) {
    switch(this.step) {
      case 2: 
        this.travelRequest.spaceship = body.spaceship;
        this.travelRequest.numTickets = body.numTickets;
        break;
      default:
        this.travelRequest = body;
    }
    this.step++;
  }
}
