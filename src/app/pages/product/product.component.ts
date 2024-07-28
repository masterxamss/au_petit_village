import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

import { BannerComponent } from '../../components/banner/banner.component';

import { Figurines } from '../../Figurines';

import { ProductsService } from '../../services/products.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgIf, BannerComponent, FontAwesomeModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  figure?: Figurines;

  faTag = faTag;
  faCartShopping = faCartShopping;
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
