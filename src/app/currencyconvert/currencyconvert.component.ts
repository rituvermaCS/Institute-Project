import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencyconvert',
  templateUrl: './currencyconvert.component.html',
  styleUrls: ['./currencyconvert.component.css']
})
export class CurrencyconvertComponent implements OnInit {
  amount:number=0;
  public dropDownValue = "";
  SetDropDownValue(drpValue : any){
    this.dropDownValue = drpValue.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
