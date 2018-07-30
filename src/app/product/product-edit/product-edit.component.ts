import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.productService.get(2).subscribe((product: Product) => {
      this.product = product;
    });
  }
}
