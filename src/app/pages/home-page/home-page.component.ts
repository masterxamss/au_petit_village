import { Component } from '@angular/core';
import { RouterLink  } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Figurines } from '../../Figurines';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    FormsModule,
    FilterByNamePipe,
    SortByPricePipe
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  figure: Figurines[] = [];
  canShow: boolean = true;
  searchTerm: string = '';
  sorting: string = '';

  constructor(private productsService: ProductsService) {
    this.getFigurines();
  }

  // GET ALL PRODUCTS FROM productsService
  getFigurines() {
    this.productsService.getAll().subscribe((figure) => (this.figure = figure));
  }
}
