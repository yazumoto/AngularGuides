import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.get(params['id']).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }
}
