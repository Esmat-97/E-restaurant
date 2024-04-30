import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MsgsService } from './services/msgs.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgFor],
  template: `

  <form #main="ngForm" (ngSubmit)="formdata(main)">

  <div class="mb-3">
  <input type="hidden" class="form-control" name="id" #id="ngModel"   [(ngModel)]="userid"  >
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="text" #text="ngModel" ngModel></textarea>
</div>    


<div class="mb-3">
<input type="submit" value="submit">
</div>    

</form>



<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">content</th>
      <th scope="col">the date</th>


   
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let msg of historymsgs; let i = index">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ msg.msgs_id }}</td>
      <td>{{ msg.content }}</td>
      <td>{{ msg.the_date }}</td>
    

      
      <td>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" [attr.data-bs-target]="'#exampleModal' + msg.msgs_id">
        update
      </button>

      <div class="modal fade" [id]="'exampleModal' + msg.msgs_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form #main="ngForm" (ngSubmit)="updatedata(main)">
            <div class="modal-body">
              <input type="hidden" class="form-control" name="id" #id="ngModel"  [(ngModel)]="msg.msgs_id" required>
              <input type="text" class="form-control" name="content" #content="ngModel"  [(ngModel)]="msg.content" required>
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
export class ContactComponent {

constructor(private msg:MsgsService){}

  title = 'myApp';
  userid:string='';
  historymsgs:any=[];


  /* get */

  ngOnInit(){
this.userid=localStorage.getItem('user_id')as string

this.msg.historymsgs(this.userid).subscribe(res=>{
this.historymsgs=res
console.log(this.historymsgs)
})

  }



  /* insert */
  formdata(main:any){
    console.log(main.value);
    this.msg.insertmsgs(main.value).subscribe(res=>{
    })
  }


  /* update */

  updatedata(main:any){
    console.log(main.value);
    this.msg.updatemsgs(main.value).subscribe(res=>{
    })
  }



}
