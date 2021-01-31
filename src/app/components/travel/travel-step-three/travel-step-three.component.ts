import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Travel } from '../../../models/travel.model';
import { TravelPackage } from '../../../models/travel-package.model';
import { TravelPackageService } from '../../../services/travel-package.service';
import { HotelRate } from '../../../models/hotel-rate.model';

@Component({
  selector: 'app-travel-step-three',
  templateUrl: './travel-step-three.component.html'
})
export class TravelStepThreeComponent implements OnInit {

  @Output() nextStep = new EventEmitter<Travel>();
  travelPackages: TravelPackage[] = [];
  travelPackage!: TravelPackage;
  rateLunarCyclerRoom!: HotelRate;
  rateArtemisRoom!: HotelRate;
  loading = false;
  
  constructor(private travelPackageService: TravelPackageService) { }

  ngOnInit(): void {
    this.loading = true;
    this.travelPackage = new TravelPackage();
    this.rateLunarCyclerRoom = new HotelRate();
    this.rateArtemisRoom = new HotelRate();
    this.travelPackageService.findAll().subscribe((travelPackages: TravelPackage[]) => {
      this.loading = false;
      this.travelPackages = travelPackages;
    });
  }

  selectPackage(travelPackage: TravelPackage): void {
    this.travelPackage = travelPackage;
    if(!travelPackage.lunarCyclerRoom) {
      this.rateLunarCyclerRoom = new HotelRate();
    }
    if(!travelPackage.artemisRoom) {
      this.rateArtemisRoom = new HotelRate();
    }
  }

  selectRate(rate: HotelRate, artemisRoom: boolean = false): void {
    if(artemisRoom) {
      this.rateArtemisRoom = rate;
    } else {
      this.rateLunarCyclerRoom = rate;
    }
  }

  goToNextStep(): void {
    const body = new Travel();
    body.travelPackage = this.travelPackage;
    body.lunarCyclerRate = this.rateLunarCyclerRoom;
    body.artemisRate = this.rateArtemisRoom;
    this.nextStep.emit(body);
  }

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
  }
}
