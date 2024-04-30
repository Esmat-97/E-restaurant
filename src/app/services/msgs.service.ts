import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  constructor(private htp:HttpClient) { }



}
