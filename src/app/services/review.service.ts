import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getreview():Observable<any[]>{
    return this.http.get<any[]>(`${HOST_NAME}/review`)

  }


  insertreview(main:any):Observable<any>{
    return this.http.post<any>(`${HOST_NAME}/review/insert`,main)
  }


  delreview(id:any):Observable<any>{
    return this.http.delete<any>(`${HOST_NAME}/review/del?id=${id}`)
  }

  acceptreview(id:any):Observable<any>{
    return this.http.put<any>(`${HOST_NAME}/review/accept`,id)
  }

}
