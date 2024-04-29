import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private htp:HttpClient){}


getproducts() :Observable<any[]>{

  return this.htp.get<any[]>('http://localhost:1999/products')

}


insertproducts(products:any) :Observable<any>{
  return this.htp.post<any>('http://localhost:1999/products/insert',products)
}


deleteproducts(id:any) :Observable<any>{
  return this.htp.delete<any>(`http://localhost:1999/products/del?id=${id}`)
}


updateproducts(main:any) :Observable<any>{
  console.log(main)

  return this.htp.put<any>(`http://localhost:1999/products/update`,main)

}

}
