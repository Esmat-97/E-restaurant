import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

logout(){

localStorage.removeItem('email')
localStorage.removeItem('role')
localStorage.removeItem('user_id')

}


isLoggedIn(): boolean {

  return localStorage.getItem('email') ? true : false ;
  
    }


}
