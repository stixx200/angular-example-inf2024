import { Component } from '@angular/core';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import { Product } from '../product.type';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-container',
  imports: [CommonModule, ProductFilterComponent, ProductCardComponent],
  providers: [ProductService],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss',
})
export class ProductsContainerComponent {
  products$: Observable<Product[]>;

  constructor(private readonly productService: ProductService) {
    this.products$ = this.productService.receiveProducts();
  }
}
