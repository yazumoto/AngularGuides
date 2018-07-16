import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor() {
    setTimeout(() => {
      this.product = new Product('010', 'Candy', 100);
    }, 1000);
  }

  ngOnInit() {
  }

}
