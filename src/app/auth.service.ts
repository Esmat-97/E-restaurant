import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

logout(){

localStorage.removeItem('email')
localStorage.removeItem('role')

}


isAuthenticated(): boolean {

  return localStorage.getItem('email') ? true : false ;
  
    }


}
