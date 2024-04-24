import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports:[RouterLink, CommonModule],
  standalone:true,
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
            <a class="nav-link" routerLink="/features">Features</a>
            @if( this.role){
            <a class="nav-link" routerLink="/logout">Logout</a>
            }
            
            @if(!this.role){
            <a class="nav-link" routerLink="/login">Login</a>
            }
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [``]
})
export class HeaderComponent {
  title = 'myApp';

  role:string='';

  ngOnInit(){
  this.role=  localStorage.getItem('role') as string
  }
}
