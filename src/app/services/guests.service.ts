import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  
  constructor(private htp:HttpClient){}


  selectguests(email:string ,password:string) :Observable<any[]>{
    return this.htp.get<any[]>(`${HOST_NAME}/guests/select?email=${email}&password=${password}`)
  }



getguests() :Observable<any[]>{
  return this.htp.get<any[]>(`${HOST_NAME}/guests`)
}


insertguests(guests:any) :Observable<any>{
  return this.htp.post<any>(`${HOST_NAME}/guests/insert`,guests)
}


deleteguests(id:any) :Observable<any>{
  return this.htp.delete<any>(`${HOST_NAME}/guests/del?id=${id}`)
}


updateguests(data:any) :Observable<any>{
  console.log(data)
  return this.htp.put<any>(`${HOST_NAME}/guests/update`,data)

}


}
