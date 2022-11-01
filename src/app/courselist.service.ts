import { Injectable } from '@angular/core';
import { Courselist } from './courselist' ;  


@Injectable({
  providedIn: 'root'
})
export class CourselistService {
  productList: Array<Courselist> = ([  
    { productId: 1, productName: 'Python Advance', productPrice: 12000, productDesc: 'New Batch' },  
    { productId: 2, productName: 'Java SpringBoot', productPrice: 7000, productDesc: 'Two months' },  
    { productId: 3, productName: 'ASP .Net', productPrice: 8000, productDesc: 'New Batch' },  
    { productId: 4, productName: 'DevOps', productPrice: 10000, productDesc: 'Coming Soon...' }  
  
  ])  
  constructor() { }
  get() {  
    return this.productList;  
  }
}
