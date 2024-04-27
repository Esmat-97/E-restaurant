import { Component } from '@angular/core';
import { GuestsService } from './services/guests.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , RouterLink],
  template: `
  
  <form #main="ngForm" (ngSubmit)="formdata(main)">

  <br>
  <br>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-1 col-form-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="inputEmail3" name="email" #email ngModel required>
    </div>
  </div>


  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="inputPassword3"   name="password" #password ngModel required>
    </div>
  </div>

 
  <input type="submit" class="btn btn-primary" value="Sign in">

</form>



 <span> dont have account  <a  routerLink="/signup">Sing up</a> </span>
  
  `,
  styles: [`
  
  form{
    margin-left: 350px;
    margin-top: 150px;
    width:500px;
    border:solid green 2px;

}

input[ type=email]{
  margin-left:50px;
}

input[ type=password]{
  margin-left:50px;
}

.row {
  margin-left:50px;
}

span {
  margin-left:450px;
}


input[ type= submit]{
  margin-left:190px;
  margin-bottom:50px;
}
`]
})


export class LoginComponent {
  title = 'myApp';

  constructor(private gue:GuestsService,
     private router:Router  ){}
  
  signdata:any={}


formdata(main:any){

this.signdata=main.value


this.gue.getguests().subscribe((infos:any)=>{

for(let info of infos){
 if(info.email === this.signdata.email && info.password === this.signdata.password ){
console.log('you are loggin');

localStorage.setItem('email',info.email);
localStorage.setItem('role',info.role);
localStorage.setItem('user_id',info.guest_id);

this.router.navigate(['/'])


 }
}  })

}




}
