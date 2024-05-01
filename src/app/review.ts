import { Component } from '@angular/core';
import { ReviewService } from './services/review.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule],
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
 
  `,
  styles: [``]
})
export class ReviewComponent {
constructor(private rev:ReviewService){}

  title = 'myApp';

  userid:string='';

  ngOnInit(){
    this.userid=localStorage.getItem('user_id')as string
    
  }


  /* insert */
  formdata(main:any){
    console.log(main.value);
    this.rev.insertreview(main.value).subscribe(res=>{
    })
  }
 

}
