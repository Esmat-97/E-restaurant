import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  
  <form>
  <br>
  <br>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-1 col-form-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>


  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>


 
 
  <input type="submit" class="btn btn-primary" value="Sign in">
</form>
  
  `,
  styles: [`form{
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

input[ type= submit]{
  margin-left:190px;
  margin-bottom:100px;
}
`]
})
export class LoginComponent {
  title = 'myApp';
}
