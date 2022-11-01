import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  digits: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  hourPosition=0;
  minPosition=0;
  secPosition=6;

  counter!:Subscription;
 
  constructor() { }

  ngOnInit(): void {
    this.startClock();
  }

  startClock() {

    this.counter=timer(0,1000).subscribe((res)=>{
      let date=new Date();

      let sec=date.getSeconds();
      let min=date.getMinutes();
      let hour=date.getHours();
      let day=date.getDate();
      let month=date.getMonth();
      let year=date.getFullYear();

      // this.dt.year=year.toString();
      // this.dt.month=month.toString();

      this.secPosition=sec*6,
      this.minPosition=min*6,
      this.hourPosition= (hour > 11 ? hour-12 : hour)*30+Math.floor(min/12)*6;

    });
  }
}