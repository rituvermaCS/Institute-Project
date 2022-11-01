import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isShow=true;
  toggledisplay()
  {
    this.isShow= !this.isShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // value: string;
  

}
