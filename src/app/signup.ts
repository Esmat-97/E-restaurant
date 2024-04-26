import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GuestsService } from './services/guests.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  template: `
  
  <form class="row g-3" #main="ngForm" (ngSubmit)="formdata(main)">

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First name</label>
    <input type="text" class="form-control" id="inputEmail4"  name="fname"  #fname="ngModel"  required  ngModel>
  </div>


  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">last name</label>
    <input type="text" class="form-control" id="inputPassword4" name="lname" #lname="ngModel"  required  ngModel>
  </div>


  <div class="col-12">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputAddress" name="email" #email="ngModel" required ngModel>
  </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">password</label>
    <input type="password" class="form-control" id="inputAddress" name="password" #password="ngModel" required ngModel>
  </div>

  <div class="col-12">
    <label for="inputAddress2" class="form-label"> Phone number</label>
    <input type="text" class="form-control" id="inputAddress2" name="phone" #phone="ngModel" required ngModel>
  </div>

 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
  
  `,
  styles: [``]
})
export class SignupComponent {
  title = 'myApp';

  constructor(private gue:GuestsService){}

  formdata(main:any){
      
console.log(main.value);
this.gue.insertguests( main.value).subscribe(res=>{

})
  }

}
