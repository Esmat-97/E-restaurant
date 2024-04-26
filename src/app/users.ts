import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,NgFor],
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody *ngFor="let x of guests ">
    <tr>
      <th scope="row">1</th>
      <td>{{x.fname}}</td>
      <td>{{x.email}}</td>
      <td>{{x.role}}</td>
    </tr>
  
  </tbody>
</table>
  `,
  styles: [``]
})
export class UsersComponent {
  title = 'myApp';

  guests:any=[];

  constructor(private htp:HttpClient){}

  ngOnInit(){
    this.htp.get('http://localhost:1999/guests').subscribe((res:any)=>{
   this.guests=res
 console.log(this.guests)
    })
  }
}
