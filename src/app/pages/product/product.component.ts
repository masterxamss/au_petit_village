import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

import { Figurines } from '../../Figurines';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  figure?: Figurines;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {
    this.getFigure();
  }

  //GET PRODUCT FROM productsService
  getFigure() {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.productsService
      .getOne(id)
      .subscribe((figure) => (this.figure = figure));
  }
}
