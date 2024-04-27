import { Component } from '@angular/core';
import { GuestsService } from './services/guests.service';
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
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody *ngFor="let x of guests ">
    <tr>
      <th scope="row">1</th>
      <td>{{x.fname}}</td>
      <td>{{x.email}}</td>
      <td>{{x.role}}</td>
      <td><button (click)="del(x.guest_id)">delete</button></td>

    </tr>
  
  </tbody>
</table>
  `,
  styles: [``]
})
export class UsersComponent {
  title = 'myApp';

  guests:any=[];

  constructor(private gue:GuestsService){}

  /* get */

  ngOnInit(){
    this.gue.getguests().subscribe((res:any)=>{
   this.guests=res
 console.log(this.guests)
    })
  }


  /*delete*/
del(id:number){
this.gue.deleteguests(id).subscribe(res=>{

})
}
}
