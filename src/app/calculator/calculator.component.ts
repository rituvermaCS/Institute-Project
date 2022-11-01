import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input : number =0;
  amount!: number;
  am:String="";
  roi: number =12; 
  selectedTeam : String ="";
  public dropDownValue = "";
  SetDropDownValue(drpValue : any){
    this.dropDownValue = drpValue.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
