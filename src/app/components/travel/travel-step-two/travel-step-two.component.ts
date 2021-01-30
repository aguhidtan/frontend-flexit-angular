import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SpaceshipService } from '../../../services/spaceship.service';
import { LunarCyclerHotel } from 'src/app/models/lunar-cycler-hotel.model';
import { Spaceship } from '../../../models/spaceship.model';
import { TravelRequest } from '../../../models/travel-request.model';

@Component({
  selector: 'app-travel-step-two',
  templateUrl: './travel-step-two.component.html'
})
export class TravelStepTwoComponent implements OnChanges {

  @Input() travelDate!: Date;
  @Input() hotel!: LunarCyclerHotel;
  @Output() nextStep = new EventEmitter<TravelRequest>();
  loading = false;
  spaceships: Spaceship[] = [];
  spaceship!: Spaceship;
  numTickets!: number;
  constructor(private spaceshipService: SpaceshipService) {}

  ngOnChanges(): void {
    this.loading = true;
    this.numTickets = 0;
    this.spaceship = new Spaceship();
    this.spaceshipService.searchAvailability(this.travelDate, this.hotel).subscribe((spaceships: Spaceship[]) => {
      this.loading = false;
      this.spaceships = spaceships;
    });
  }

  selectSpaship(spaceshipAv: Spaceship) {
    this.spaceship = spaceshipAv;
  }

  goToNextStep() {
    const body = new TravelRequest();
    body.spaceship = this.spaceship;
    body.numTickets = this.numTickets;
    this.nextStep.emit(body);
  }
}
