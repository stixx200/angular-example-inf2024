import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from '../product.type';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-product-filter',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
})
export class ProductFilterComponent implements OnInit {
  @Input('products') products$!: Observable<Product[]>;

  myControl = new FormControl('');
  @Output('selectedCategory') selectedCategory$: Observable<string> =
    this.myControl.valueChanges.pipe(map((value) => value || ''));
  categories$?: Observable<string[]>;

  ngOnInit(): void {
    this.categories$ = this.products$.pipe(
      map((products) => [...new Set(products.map((prod) => prod.category))])
    );
  }

  // categories?: string[] = this.products?.reduce(
  //   (prevValue: string[], currentValue: Product) => {
  //     if (prevValue.includes(currentValue.category)) {
  //       return prevValue;
  //     }
  //
  //     prevValue.push(currentValue.category);
  //     return prevValue;
  //   },
  //   [] as string[]
  // );
}
