import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = null;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.productService.list().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
