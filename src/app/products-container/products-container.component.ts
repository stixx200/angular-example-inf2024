import { Component } from '@angular/core';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-container',
  imports: [ProductFilterComponent, ProductCardComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss',
})
export class ProductsContainerComponent {}
