import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

export const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: 'products', component: ProductsContainerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'products' },
];
