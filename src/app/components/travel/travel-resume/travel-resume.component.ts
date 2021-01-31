import { Component, OnInit, Input } from '@angular/core';
import { TravelService } from '../../../services/travel.service';
import { Travel } from '../../../models/travel.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  travelForm!: FormGroup;
  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
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
    if(this.travelForm.invalid) {
      return;
    }
    this.buying = true;
    this.travelDetail.emailBuy = this.travelForm.controls.email.value;
    this.travelService.buyTravel(this.travelDetail).subscribe(() => {
      this.buying = false;
      this.confirmed = true;
    });
  }
}
