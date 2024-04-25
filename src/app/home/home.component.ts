import { Component } from '@angular/core';
import { HeaderComponent } from '../header.component';
import { FooterComponent } from '../footer.component';
import { HeroComponent } from '../hero.component';
import { ProductsComponent } from '../products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,HeroComponent,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
