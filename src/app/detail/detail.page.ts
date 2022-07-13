import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  weather: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params=>{
      if (params && params.special) {
        this.weather = JSON.parse(params.special);
        }
    })
  }

  ngOnInit() {
  }


  save(){
    let arrayValue = JSON.parse(localStorage.getItem('fav'));
    if(arrayValue == null){
      localStorage.setItem('fav', JSON.stringify([this.weather]));
    }
    else{
      arrayValue.push(this.weather);
      localStorage.setItem('fav', JSON.stringify(arrayValue));
      this.router.navigate(['/tabs/tab3']);
    }

  }

}
