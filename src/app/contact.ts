import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MsgsService } from './services/msgs.service';


@Component({
  selector: 'app-contact',
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
export class ContactComponent {

constructor(private msg:MsgsService){}

  title = 'myApp';
  userid:string='';

  ngOnInit(){
this.userid=localStorage.getItem('user_id')as string
  }



  formdata(main:any){
    console.log(main.value);
    this.msg.insertmsgs(main.value).subscribe(res=>{

    })

  }
}
