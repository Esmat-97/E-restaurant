import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `

  <div class="row row-cols-1 row-cols-md-3 g-4">


  <div class="col" *ngFor="let user of data , let i =index">
    <div class="card ">
      <img [src]="'../assets/' +user.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{user.product_name}}</h5>
        <p class="card-text">{{user.price}} LE</p>

        @if(role === 'admin'){
        <button class="btn btn-danger"> delete</button>
        <button class="btn btn-warning"> update</button>
        <button class="btn btn-info"> show more</button>
        <button class="btn btn-light"> Add to cart</button>
        }

        
        @if( ! role){
         
          }
  
        @if(role === 'customer'){
        <button class="btn btn-info"> show more</button>
        <button class="btn btn-light"> Add to cart</button>
        }
      
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
role:string='';


constructor(private pro:ProductsService){}


  ngOnInit(){
  
   this.role = localStorage.getItem('role') as string;
    
this.pro.getproducts().subscribe((res:any[])=>{

    this.data=res;
console.log(this.data)

   })


  }

}
