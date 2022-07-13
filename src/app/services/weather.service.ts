import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Forecast } from '../forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'http://api.openweathermap.org/data/2.5/';
  key = 'cacc7ec3f19633a451a88c24bffb937e';
  city = 'magelang';


  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }

  forecast(){
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
