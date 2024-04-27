import { Component } from '@angular/core';
import { HeaderComponent } from '../header.';
import { FooterComponent } from '../footer';
import { HeroComponent } from '../hero';
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
