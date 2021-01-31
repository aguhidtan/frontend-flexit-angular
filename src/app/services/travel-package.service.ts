import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelPackage } from '../models/travel-package.model';
import { URL_BASE } from '../constants/constans';

@Injectable({
  providedIn: 'root'
})
export class TravelPackageService {
  private url = `${URL_BASE}/travelPackages`;
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<TravelPackage[]> {
    return this.http.get(this.url) as any;
  }
}
