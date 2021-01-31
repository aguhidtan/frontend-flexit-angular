import { Component, OnInit } from '@angular/core';
import { Travel } from '../../models/travel.model';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html'
})
export class TravelComponent implements OnInit {

  step = 1;
  travelRequest = new Travel();

  constructor() { 
    this.travelRequest.travelDate = new Date();
  }

  ngOnInit(): void {
  }

  goToNextStep(body: Travel) {
    switch(this.step) {
      case 1:
        this.travelRequest = body;
        break;
      case 2: 
        this.travelRequest.spaceship = body.spaceship;
        this.travelRequest.numTickets = body.numTickets;
        break;
      case 3:
        this.travelRequest.travelPackage = body.travelPackage;
        this.travelRequest.lunarCyclerRate = body.lunarCyclerRate;
        this.travelRequest.artemisRate = body.artemisRate;
        break;
    }
    this.step++;
  }
}
