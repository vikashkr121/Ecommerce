import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularProducts:undefined | product[]
  trendyProducts:undefined | product[]
  constructor(private product: ProductService){}

  ngOnInit():void{
    this.product.popularProduct().subscribe((data)=>{
      console.warn(data)
      this.popularProducts=data;             
    })
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }

}
