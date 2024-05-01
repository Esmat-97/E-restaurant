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
            Do you want to delete guest with ID: {{ msg.review_id}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" (click)="del(msg.review_id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
      </td>

   

      <td>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" [attr.data-bs-target]="'#updateModal' + msg.review_id">
      accept
    </button>
    
    <!-- Modal -->
    <div class="modal fade" [id]="'updateModal' + msg.review_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to delete guest with ID: {{ msg.review_id}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" (click)="accept(msg.review_id)">Delete</button>
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


/* del */

del(id:any){
this.rev.delreview(id).subscribe(res=>{
})
}


/* accept */

accept(id:any){
  this.rev.acceptreview(id).subscribe(res=>{
  })
  }

}

