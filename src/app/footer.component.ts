import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  
    
  <footer class="footer" class=" bg-body-tertiary">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Company</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
        </div>
        <div class="col-md-4">
          <h5>Products</h5>
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
        </div>
        <div class="col-md-4">
          <h5>Follow Us</h5>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Twitter</a></p>
          <p><a href="#">Instagram</a></p>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-md-12 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  
  `,
  styles: [``]
})
export class FooterComponent { 
  title = 'myApp';
}
