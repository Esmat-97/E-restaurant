import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { LogoutComponent } from './logout';
import { AddproductsComponent } from './addproducts';
import { UsersComponent } from './users';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent},
    {path:'Addproduct',component:AddproductsComponent},
    {path:'users',component:UsersComponent}
];
