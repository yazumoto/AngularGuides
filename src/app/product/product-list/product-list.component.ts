import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  id = '100';
  products: Product[];

  constructor() {
    setTimeout(() => {
      this.products = [
        new Product('001', 'テレビ', 50000),
        new Product('002', '冷蔵庫', 70000),
        new Product('003', '洗濯機', 100000)
      ];
    }, 1000);
  }

  ngOnInit() {
  }

}
