import { Component, Input } from '@angular/core';
import { Product } from '../product.type';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ alias: 'product', required: true }) product!: Product;
}
