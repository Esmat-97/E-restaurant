import { Component } from '@angular/core';
import { ReviewService } from './services/review.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-showreview',
  standalone: true,
  imports: [NgFor],
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">content</th>
      <th scope="col">the date</th>
      <th scope="col">first name</th>
      <th scope="col">email</th>
      <th scope="col">status</th>

   
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let msg of reviews; let i = index">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ msg.content }}</td>
      <td>{{ msg.the_date }}</td>
      <td>{{ msg.fname }}</td>
      <td>{{ msg.email }}</td>
      <td>{{ msg.status }}</td>
   
    </tr>
  </tbody>
</table>

  `,
  styles: [``]
})
export class ShowreviewComponent {

  constructor(private rev:ReviewService){}


  /* get */

  reviews:any=[];

  ngOnInit(){
    this.rev.getreview().subscribe(res=>{
this.reviews=res;
console.log(this.reviews)
    })
  }


  

}

