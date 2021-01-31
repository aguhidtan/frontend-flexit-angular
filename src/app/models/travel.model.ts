import { LunarCyclerHotel } from './lunar-cycler-hotel.model';
import { Spaceship } from './spaceship.model';
import { TravelPackage } from './travel-package.model';
import { HotelRate } from './hotel-rate.model';

export class Travel {
    travelDate!: Date;
    emailBuy!: string;
    hotel!: LunarCyclerHotel;
    spaceship!: Spaceship;
    numTickets!: number;
    travelPackage!: TravelPackage;
    lunarCyclerRate!: HotelRate;
    artemisRate!: HotelRate;
    flightToLeoPrice!: number;
    lunarCyclerRoomPrice!: number;
    artemisRoomPrice!: number;
}