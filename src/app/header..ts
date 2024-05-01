import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
standalone:true,
imports:[RouterLink,CommonModule,NgClass , NgFor],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
            <a *ngIf="role" class="nav-link" routerLink="/contact">contact</a>
            <a *ngIf="role" class="nav-link" routerLink="/review">review</a>
              <a *ngIf="role" class="nav-link" routerLink="/logout">Logout</a>
              <a *ngIf="!role" class="nav-link" routerLink="/login">Login</a>
           
             @if(role === 'admin'){
            <div class="dropdown" >
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" (click)="toggleDropdown()">
              Admin list
            </button>
            <ul class="dropdown-menu" [ngClass]="{ 'show': isDropdownOpen }">
              <li><a class="dropdown-item" routerLink="users"> users</a></li>
              <li><a class="dropdown-item" routerLink="msgs"> msgs</a></li>
              <li><a class="dropdown-item" routerLink="showreview"> reviews</a></li>
              <li><a class="dropdown-item" routerLink="Addproduct">Add products</a></li>
              <li><a class="dropdown-item"  routerLink="Addusers">Add users</a></li>
            </ul>
          </div>
             }

          </div>
        </div>


        <div class="btn-group dropstart">
        <a type="button" class= "dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" (click)="toggleDropstart()">
          <img class="rounded-circle" src="image.jpg" width="35" />
          </a>
        <ul class="dropdown-menu" [ngClass]="{ 'show': isDropstartOpen }">
          <li><a class="dropdown-item" href="myprofile.php">My profile</a></li>
          <li><a class="dropdown-item" href="logout.php">logout</a></li>
        </ul>
      </div>

      </div>
    </nav>
  `,
  styles: [``]
})
export class HeaderComponent {
  title = 'myApp';
  role: string = '';
  isDropdownOpen: boolean = false;
  isDropstartOpen: boolean = false;

  ngOnInit() {
    this.role = localStorage.getItem('role') as string;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  toggleDropstart() {
    this.isDropstartOpen = !this.isDropstartOpen;
  }
}
