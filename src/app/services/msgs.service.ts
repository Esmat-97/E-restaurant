import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  constructor(private htp:HttpClient) { }

  getmsgs():Observable<any[]> {
    return this.htp.get<any[]>('http://localhost:1999/msgs');
      }


  insertmsgs(msg:any):Observable<any> {
    console.log(msg);
return this.htp.post('http://localhost:1999/msgs/insert',msg);
  }




}
