import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  <input type="file" class="form-control" id="inputPassword4" name="image" #image="ngModel"  required  ngModel>
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
  title = 'myApp';

  constructor(private htp:HttpClient){}

  formdata(main:any){
      
console.log(main.value);
this.htp.post('http://localhost:1999/insertproducts', main.value).subscribe(res=>{

})
  }

}
