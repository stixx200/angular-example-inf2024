import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ alias: 'product', required: true }) product!: Product;
}
