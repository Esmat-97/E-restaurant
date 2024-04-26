import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

logout(){

localStorage.removeItem('email')
localStorage.removeItem('role')

}


isLoggedIn(): boolean {

  return localStorage.getItem('email') ? true : false ;
  
    }


}
