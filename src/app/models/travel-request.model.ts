import { LunarCyclerHotel } from './lunar-cycler-hotel.model';
import { Spaceship } from './spaceship.model';

export class TravelRequest {
    travelDate!: Date;
    hotel!: LunarCyclerHotel;
    spaceship!: Spaceship;
    numTickets!: number;
}