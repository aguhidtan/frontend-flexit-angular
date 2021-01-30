import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LunarCyclerHotel } from '../../../models/lunar-cycler-hotel.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { LunarCyclerHotelService } from '../../../services/lunar-cycler-hotel.service';

@Component({
  selector: 'app-travel-step-one',
  templateUrl: './travel-step-one.component.html'
})
export class TravelStepOneComponent {

  @Input() travelDate!: Date;
  @Input() hotel!: LunarCyclerHotel;
  @Output() nextStep = new EventEmitter<void>();
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
    this.nextStep.emit();
  }
}
