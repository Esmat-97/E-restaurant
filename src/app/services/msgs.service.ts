import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';


@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  constructor(private htp:HttpClient) { }


  historymsgs(id:any) :Observable<any>{
    return this.htp.get<any>(`${HOST_NAME}/msgs/history?id=${id}`)
  }
  


  getmsgs():Observable<any[]> {
    return this.htp.get<any[]>(`${HOST_NAME}/msgs`);
      }



  insertmsgs(msg:any):Observable<any> {
    console.log(msg);
return this.htp.post(`${HOST_NAME}/msgs/insert`,msg);
  }



  deletemsgs(id:any) :Observable<any>{
    return this.htp.delete<any>(`${HOST_NAME}/msgs/del?id=${id}`)
  }
  
  

  updatemsgs(main:any) :Observable<any>{
    console.log(main)
    return this.htp.put<any>(`${HOST_NAME}/msgs/update`,main)
  
  }


}
