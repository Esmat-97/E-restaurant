import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MsgsService } from './services/msgs.service';

@Component({
  selector: 'app-msgs',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">content</th>
      <th scope="col">the date</th>
      <th scope="col">first name</th>
      <th scope="col">email</th>
   
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let msg of msgs; let i = index">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ msg.msgs_id }}</td>
      <td>{{ msg.content }}</td>
      <td>{{ msg.the_date }}</td>
      <td>{{ msg.fname }}</td>
      <td>{{ msg.email }}</td>
    </tr>
  </tbody>
</table>

  `,
  styles: [``]
})
export class MsgsComponent {
  title = 'myApp';

  msgs:any=[];

  datagueste:any={}

  constructor(private msg:MsgsService){}

  /* get */

  ngOnInit(){
    this.msg.getmsgs().subscribe((res:any)=>{
   this.msgs=res
 console.log(this.msgs)
    })
  }


  /*delete*/

// del(id:number){
// this.gue.deleteguests(id).subscribe(res=>{

// })
// }



/* update */

// formdata(main:any){
// this.datagueste=main.value
// console.log(this.datagueste)
//   this.gue.updateguests(main.value).subscribe(res=>{

//   })

// }
}
