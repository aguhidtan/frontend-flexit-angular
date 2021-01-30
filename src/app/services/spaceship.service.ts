import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchRequest } from '../models/search-request.model';
import { Spaceship } from '../models/spaceship.model';
import { SearchResponse } from '../models/search-response.model';
import { Observable } from 'rxjs';
import { URL_BASE } from '../constants/constans';
import { LunarCyclerHotel } from '../models/lunar-cycler-hotel.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {
  private url =  `${URL_BASE}/spaceships/`;

  constructor(private http: HttpClient) { }

  search(searchRequest: SearchRequest<Spaceship>): Observable<SearchResponse<Spaceship>> {
    return this.http.post(`${this.url}search`, searchRequest) as any;
  }

  searchAvailability(travelDate: Date, hotel: LunarCyclerHotel): Observable<Spaceship[]> {
    const request = {travelDate: travelDate , hotelId: hotel.id};
    return this.http.post(`${this.url}availability`, request) as any;
  }
}
