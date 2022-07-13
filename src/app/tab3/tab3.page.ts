import { json } from '@angular-devkit/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public fav: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    let x = JSON.parse(localStorage.getItem('fav'));
    if(x == null){
      this.fav = [];
      console.log(this.fav);
    }
    else{
      this.fav = x;
      console.log(this.fav);
    }
  }

  delete(data:string){
    let id = data;
    let index = this.fav.findIndex(x => x.id == id);
    if (index > -1) {
      this.fav.splice(index, 1);
      localStorage.setItem('fav', JSON.stringify(this.fav));
    }
    window.location.href = '/tabs/tab3';
  }

}
