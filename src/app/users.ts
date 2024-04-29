import { Component } from '@angular/core';
import { GuestsService } from './services/guests.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let guest of guests; let i = index">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ guest.fname }}</td>
      <td>{{ guest.email }}</td>
      <td>{{ guest.role }}</td>






      <td> 
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" [attr.data-bs-target]="'#delModal' + guest.guest_id">
      delete
    </button>
    
    <!-- Modal -->
    <div class="modal fade" [id]="'delModal' + guest.guest_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to delete guest with ID: {{ guest.fname}}?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" (click)="del(guest.guest_id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    
      </td>
      









      <td>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" [attr.data-bs-target]="'#exampleModal' + guest.guest_id">
          update
        </button>

        <div class="modal fade" [id]="'exampleModal' + guest.guest_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form #main="ngForm" (ngSubmit)="formdata(main)">
              <div class="modal-body">
                <input type="hidden" class="form-control" name="id" #id="ngModel"  [(ngModel)]="guest.guest_id" required>
                <input type="email" class="form-control" name="email" #email="ngModel"  [(ngModel)]="guest.email" required>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary"  >Save changes</button>
              </div>
              </form>

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
export class UsersComponent {
  title = 'myApp';

  guests:any=[];

  datagueste:any={}

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



/* update */

formdata(main:any){
this.datagueste=main.value
console.log(this.datagueste)
  this.gue.updateguests(main.value).subscribe(res=>{

  })

}
}
