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
      <th scope="col">delete</th>
   
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

      

      <td> 
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" [attr.data-bs-target]="'#delModal' + msg.msgs_id">
      delete
    </button>
    
    <!-- Modal -->
    <div class="modal fade" [id]="'delModal' + msg.msgs_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to delete guest with ID: {{ msg.msgs_id}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" (click)="del(msg.msgs_id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    
      </td>
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

del(id:number){
this.msg.deletemsgs(id).subscribe(res=>{

})
}



/* update */

// formdata(main:any){
// this.datagueste=main.value
// console.log(this.datagueste)
//   this.gue.updateguests(main.value).subscribe(res=>{

//   })

// }
}
