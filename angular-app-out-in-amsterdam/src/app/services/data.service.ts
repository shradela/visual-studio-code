import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venue } from './../models/venue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>('/assets/establishment-data.json', {responseType: 'json'});
  }


}


