import { Injectable } from '@angular/core';
import { URL_BASE } from '../constants/constans';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private url = `${URL_BASE}/travels`;

  constructor(private http: HttpClient) { }

  getPrice(body: Travel):Observable<Travel> {
    return this.http.post(`${this.url}/getPrice`, body) as any;
  }

  buyTravel(body: Travel):Observable<Travel> {
    return this.http.post(`${this.url}/buy`, body) as any;
  }
}
