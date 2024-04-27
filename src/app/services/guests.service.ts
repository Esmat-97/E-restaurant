import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  constructor(private htp:HttpClient){}


getguests() :Observable<any[]>{

  return this.htp.get<any[]>('http://localhost:1999/guests')

}


insertguests(guests:any) :Observable<any>{

  return this.htp.post<any>('http://localhost:1999/guests/insert',guests)

}


deleteguests(id:any) :Observable<any>{
  return this.htp.delete<any>(`http://localhost:1999/guests/del?id=${id}`)

}
}
