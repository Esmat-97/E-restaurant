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
        <button class="btn btn-danger" (click)="del(user.product_id)"> delete</button>


        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        
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
/* get */

  ngOnInit(){
  this.role = localStorage.getItem('role') as string;
this.pro.getproducts().subscribe((res:any[])=>{
    this.data=res;
console.log(this.data)

   })
  }


  /* delete */
del(id:number){
this.pro.deleteproducts(id).subscribe(res=>{
  
})
}



}
