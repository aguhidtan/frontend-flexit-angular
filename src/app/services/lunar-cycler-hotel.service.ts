import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BASE } from '../constants/constans';
import { Observable } from 'rxjs';
import { LunarCyclerHotel } from '../models/lunar-cycler-hotel.model';

@Injectable({
  providedIn: 'root'
})
export class LunarCyclerHotelService {

  private url =  `${URL_BASE}/hotels`;
  
  constructor(private http: HttpClient) { }

  getHotels(travelDate: Date): Observable<LunarCyclerHotel[]> {
    return this.http.get(`${this.url}?travelDate=${travelDate.getFullYear()}-${travelDate.getMonth()}-${travelDate.getDate()}`) as any;
  }
}
