import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public weather = {};
  public temp = 0 ;
  public city = '' ;

  constructor(private WeatherService:WeatherService) {}
  ngOnInit(): void {
    this.WeatherService.getData().subscribe((data:any) => {
      this.weather = data;
      this.temp = data.main.temp;
      this.city = data.name;
      console.log(this.weather);
    });
  }
}