import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  template: ``,
  styles: [``]
})
export class LogoutComponent {
  title = 'myApp';
  constructor(private auth:AuthService){}

  ngOnInit(){
    this.auth.logout();
  }
}
