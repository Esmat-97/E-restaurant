import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  template: ``,
  styles: [``]
})
export class LogoutComponent {
  title = 'myApp';

  constructor(private auth:AuthService,
                private router:Router){}

  ngOnInit(){
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
