import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = new Promise((resolve) =>
    setTimeout(() => resolve('angular-example'), 3000)
  );
}
