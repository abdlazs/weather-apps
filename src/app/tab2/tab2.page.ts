import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Subscriber } from 'rxjs';
import {WeatherService} from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public forecast = [];

  constructor(private WeatherService:WeatherService, private router:Router) {}
  ngOnInit(): void {
    this.WeatherService.forecast().subscribe((data:any) => {
      this.forecast = data.list;
      console.log(this.forecast);
    });
  }
  detailPage(data:string):void{
    let weather = {
      id: data['dt'],
      date: data['dt_txt'],
      temp: data['main']['temp'],
      main: data['weather'][0]['main'],
      desc: data['weather'][0]['description'],
      icon: data['weather'][0]['icon']
    };

    let extras: NavigationExtras = {
      queryParams: {
        special:JSON.stringify(weather)
      }
    };

    this.router.navigate(['/detail'], extras);
    console.log(weather);
  }


  // endExport
}
