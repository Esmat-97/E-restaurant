import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `

  
  `,
  styles: [``]
})
export class ProductsComponent {
  title = 'myApp';

  constructor(private htp:HttpClient){}

  ngOnInit(){
      
this.htp.get('http://localhost:1999/products').subscribe((res:any)=>{
console.log(res)
})
  }

}
