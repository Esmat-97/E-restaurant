import { Component } from '@angular/core';
import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';
import { HeroComponent } from '../hero.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
