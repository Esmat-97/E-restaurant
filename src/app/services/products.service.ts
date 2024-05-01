import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private htp:HttpClient){}


getproducts() :Observable<any[]>{

  return this.htp.get<any[]>(`${HOST_NAME}/products`)

}


insertproducts(products:any) :Observable<any>{
  return this.htp.post<any>(`${HOST_NAME}/products/insert`,products)
}


deleteproducts(id:any) :Observable<any>{
  return this.htp.delete<any>(`${HOST_NAME}/products/del?id=${id}`)
}


updateproducts(main:any) :Observable<any>{
  console.log(main)

  return this.htp.put<any>(`${HOST_NAME}/products/update`,main)

}

}
