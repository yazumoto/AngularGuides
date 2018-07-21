import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product(1, 'Angular入門書「天地創造の章」', 3800, '神は云った。「Angularあれ」。するとAngularが出来た。');
  }

}
