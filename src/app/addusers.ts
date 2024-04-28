import { Component } from '@angular/core';
import { GuestsService } from './services/guests.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addusers',
  standalone: true,
  imports: [FormsModule],
  template: `
  <form class="row g-3"  #main="ngForm" (ngSubmit)="formdata(main)"  >

  <div class="col-6">
  <label for="inputAddress" class="form-label">first name</label>
  <input type="text" class="form-control" name="fname"  #fname="ngModel"  ngModel>
</div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">last name</label>
    <input type="text" class="form-control" name="lname"  #lname="ngModel"  ngModel>
  </div>


  <div class="col-12">
  <label for="inputAddress2" class="form-label">Email</label>
  <input type="email" class="form-control" name="email"  #email="ngModel" ngModel>
</div>


  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" name="password"   #password="ngModel"  ngModel>
  </div>


  <div class="col-md-6">
    <label for="inputCity" class="form-label">phone</label>
    <input type="text" class="form-control" name="phone"  #phone="ngModel" ngModel>
  </div>




   
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add users</button>
  </div>
</form>
  `,
  styles: [``]
})
export class AddusersComponent {
  title = 'myApp';

  constructor(private gue:GuestsService){}
 
  formdata(main :any){

    console.log(main.value)
    
    this.gue.insertguests(main.value).subscribe(res=>{

    })
  }

}
