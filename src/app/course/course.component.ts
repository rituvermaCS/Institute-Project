import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser'; 
import {CourselistService} from '../courselist.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  productList: any;
  constructor(private productService: CourselistService, private title: Title) { }

  ngOnInit(){
    this.title.setTitle("Product List");  
    this.productList = this.productService.get();
  }
}