import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `

  <form>

  <div class="mb-3">
  <input type="hidden" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>    


<div class="mb-3">
<input type="submit" value="submit">
</div>    

</form>

  
  `,
  styles: [``]
})
export class ContactComponent {
  title = 'myApp';

}
