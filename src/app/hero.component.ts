import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  
  <img src="../assets/sea food.jpg" >

  `,
  styles: [`
  img{
    width: 100%;
    height: 500px;
}
  `]
})
export class HeroComponent {
  title = 'myApp';
}
