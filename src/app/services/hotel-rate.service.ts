import { Injectable } from '@angular/core';
import { URL_BASE } from '../constants/constans';
import { Observable } from 'rxjs';
import { HotelRate } from '../models/hotel-rate.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelRateService {

  private url = `${URL_BASE}/hotelRates`;
  
  constructor(private http: HttpClient) { }

  findRates(artemisRoom?: boolean): Observable<HotelRate[]> {
    const url = artemisRoom != undefined ? `${this.url}?artemisRoom=${artemisRoom}` : this.url;
    return this.http.get(url) as any; 
  }
}
