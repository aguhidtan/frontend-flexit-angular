import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HotelRateService } from '../../services/hotel-rate.service';
import { HotelRate } from '../../models/hotel-rate.model';

@Component({
  selector: 'app-hotel-rate',
  templateUrl: './hotel-rate.component.html'
})
export class HotelRateComponent implements OnChanges {

  @Input() artemisRoom!: boolean;
  @Output() rateSelectedEmiter = new EventEmitter<HotelRate>();
  hotelRates: HotelRate[] = [];
  rateSelected!: HotelRate;

  constructor(private hotelRateService: HotelRateService) { }

  ngOnChanges(): void {
    this.rateSelected = new HotelRate();
    this.hotelRateService.findRates(this.artemisRoom).subscribe((rates: HotelRate[]) => {
      this.hotelRates = rates;
    });
  }

  selectRate(rate: HotelRate) {
    this.rateSelected = rate;
    this.rateSelectedEmiter.emit(rate);
  }
}
