import { Component, OnInit, Input } from '@angular/core';
import { TravelService } from '../../../services/travel.service';
import { Travel } from '../../../models/travel.model';

@Component({
  selector: 'app-travel-resume',
  templateUrl: './travel-resume.component.html'
})
export class TravelResumeComponent implements OnInit {

  @Input() travel!: Travel;
  confirmed = false;
  travelDetail!: Travel;
  totalPrice!: number;
  buying = false;
  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getPrice(this.travel).subscribe((body: Travel) => {
      this.travelDetail = body;
      this.totalPrice = body.flightToLeoPrice;
      if(body.lunarCyclerRoomPrice) {
        this.totalPrice += body.lunarCyclerRoomPrice;
      }
      if(body.artemisRoomPrice) {
        this.totalPrice += body.artemisRoomPrice
      }
    });
  }

  buyTravel() {
    this.buying = true;
    this.travelDetail.emailBuy = 'test@test.com';
    this.travelService.buyTravel(this.travelDetail).subscribe(() => {
      this.buying = false;
      this.confirmed = true;
    });
  }
}
