import { Component, OnInit } from '@angular/core';
import { TravelRequest } from '../../models/travel-request.model';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html'
})
export class TravelComponent implements OnInit {

  step = 1;
  travelRequest = new TravelRequest();

  constructor() { }

  ngOnInit(): void {
  }

  goToNextStep() {
    this.step++;
  }
}
