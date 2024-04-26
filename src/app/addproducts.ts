import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [FormsModule],
  template: `
  
  <form class="row g-3" #main="ngForm" (ngSubmit)="formdata(main)">

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">product</label>
    <input type="text" class="form-control" id="inputEmail4"  name="product_name"  #product_name="ngModel"  required  ngModel>
  </div>


  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"> description </label>
    <input type="text" class="form-control" id="inputPassword4" name="description" #description="ngModel"  required  ngModel>
  </div>



  <div class="col-md-6">
  <label for="inputPassword4" class="form-label"> image </label>
  <input type="file" (change)=" onFileSelected($event)" class="form-control" id="inputPassword4" name="image" #image="ngModel"  required  ngModel>
</div>


  <div class="col-12">
    <label for="inputAddress" class="form-label">price</label>
    <input type="text" class="form-control" id="inputAddress" name="price" #price="ngModel" required ngModel>
  </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">stock</label>
    <input type="text" class="form-control" id="inputAddress" name="stock" #stock="ngModel" required ngModel>
  </div>

  <div class="col-12">
    <label for="inputAddress2" class="form-label"> guest_id </label>
    <input type="text" class="form-control" id="inputAddress2" name="guest_id" #guest_id="ngModel" required ngModel>
  </div>

 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
  
  `,
  styles: [``]
})
export class AddproductsComponent {

  
selectedFile: File | null = null; 

imagename:string='';

products:any={};

  constructor(private pro:ProductsService){}


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Get the first file selected by the user
    if (this.selectedFile) {
     this.imagename = this.selectedFile.name; // Extract the file name
    }
  }


  formdata(main:any){
   this.products= main.value

   if (this.selectedFile) {
    this.products.image=this.imagename
   }

console.log(this.products);
this.pro.insertproducts( this.products).subscribe(res=>{
  console.log('Product added successfully:', res);
})
  }

}
