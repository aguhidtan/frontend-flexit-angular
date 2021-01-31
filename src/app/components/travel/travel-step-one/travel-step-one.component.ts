import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LunarCyclerHotel } from '../../../models/lunar-cycler-hotel.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { LunarCyclerHotelService } from '../../../services/lunar-cycler-hotel.service';
import { Travel } from '../../../models/travel.model';

@Component({
  selector: 'app-travel-step-one',
  templateUrl: './travel-step-one.component.html'
})
export class TravelStepOneComponent {

  @Input() travelDate!: Date;
  @Input() hotel!: LunarCyclerHotel;
  @Output() nextStep = new EventEmitter<Travel>();
  modelDate!: NgbDateStruct;
  loading = false;
  hotels: LunarCyclerHotel[];
  constructor(private hotelService: LunarCyclerHotelService) {
    this.hotels = [];
   }

  loadHotels() {
    this.travelDate = new Date(this.modelDate.year, this.modelDate.month, this.modelDate.day);
    this.hotels = [];
    this.hotel = new LunarCyclerHotel();
    this.loading = true;
    this.hotelService.getHotels(this.travelDate).subscribe((hotels: LunarCyclerHotel[]) => {
      this.loading = false;
      this.hotels = hotels;
    });
  }

  selectHotel(hotelAv: LunarCyclerHotel) {
    this.hotel = hotelAv;
  }

  goToNextStep() {
    const body = new Travel();
    body.travelDate = this.travelDate;
    body.hotel = this.hotel;
    this.nextStep.emit(body);
  }
}
