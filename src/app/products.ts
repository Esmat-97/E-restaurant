import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `

  <div class="row row-cols-1 row-cols-md-3 g-4">


  <div class="col" *ngFor="let user of data , let i =index">
    <div class="card h-100">
      <img [src]="'../assets/' +user.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{user.product_name}}</h5>
        <p class="card-text">{{user.price}} LE</p>
        <button class="btn btn-danger"> delete</button>
        <button class="btn btn-warning"> update</button>
        <button class="btn btn-info"> show more</button>
        <button class="btn btn-light"> Add to cart</button>
      </div>
    </div>

  </div>



</div>
  
  `,
  styles: [``]
})
export class ProductsComponent {
  title = 'myApp';
data:any=[];

  constructor(private htp:HttpClient){}

  ngOnInit(){
      
this.htp.get('http://localhost:1999/products').subscribe((res:any)=>{
    this.data=res;
console.log(this.data)
})
  }

}
