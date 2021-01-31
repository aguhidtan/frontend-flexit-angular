import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { TravelRequest } from '../../../models/travel-request.model';
import { TravelPackage } from '../../../models/travel-package.model';
import { TravelPackageService } from '../../../services/travel-package.service';
import { HotelRate } from '../../../models/hotel-rate.model';

@Component({
  selector: 'app-travel-step-three',
  templateUrl: './travel-step-three.component.html'
})
export class TravelStepThreeComponent implements OnChanges {

  @Output() nextStep = new EventEmitter<TravelRequest>();
  travelPackages: TravelPackage[] = [];
  travelPackage!: TravelPackage;
  rateLunarCyclerRoom!: HotelRate;
  rateArtemisRoom!: HotelRate;
  loading = false;
  
  constructor(private travelPackageService: TravelPackageService) { }

  ngOnChanges(): void {
    this.loading = true;
    this.travelPackage = new TravelPackage();
    this.rateLunarCyclerRoom = new HotelRate();
    this.rateArtemisRoom = new HotelRate();
    this.travelPackageService.findAll().subscribe((travelPackages: TravelPackage[]) => {
      this.loading = false;
      this.travelPackages = travelPackages;
    });
  }

  selectRate(rate: HotelRate, artemisRoom: boolean = false): void {
    if(artemisRoom) {
      this.rateArtemisRoom = rate;
    } else {
      this.rateLunarCyclerRoom = rate;
    }
  }

  goToNextStep(): TravelRequest {
    return new TravelRequest();
  }

  /*
  isValidForm(): boolean {
    if(this.travelPackage?.id == undefined) {
      return false;
    } else if(this.travelPackage.lunarCyclerRoom && this.travelPackage.artemisRoom) {
      return this.rateLunarCyclerRoom?.id != undefined && this.rateArtemisRoom?.id != undefined;
    } else if(this.travelPackage.lunarCyclerRoom) {
      return this.rateLunarCyclerRoom?.id != undefined;
    } else if(this.travelPackage.artemisRoom) {
      return this.rateArtemisRoom?.id != undefined;
    } else {
      return true;
    }
  }*/
}
