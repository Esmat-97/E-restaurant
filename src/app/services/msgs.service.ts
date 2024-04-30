import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  constructor(private htp:HttpClient) { }


  historymsgs(id:any) :Observable<any>{
    return this.htp.get<any>(`http://localhost:1999/msgs/history?id=${id}`)
  }


  getmsgs():Observable<any[]> {
    return this.htp.get<any[]>('http://localhost:1999/msgs');
      }


  insertmsgs(msg:any):Observable<any> {
    console.log(msg);
return this.htp.post('http://localhost:1999/msgs/insert',msg);
  }


  deletemsgs(id:any) :Observable<any>{
    return this.htp.delete<any>(`http://localhost:1999/msgs/del?id=${id}`)
  }
  
  
  updatemsgs(main:any) :Observable<any>{
    console.log(main)
    return this.htp.put<any>(`http://localhost:1999/msgs/update`,main)
  
  }


}
