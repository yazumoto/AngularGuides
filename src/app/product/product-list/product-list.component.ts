import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

class ProductListElement extends Product {
  hovered: boolean;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductListElement[] = null;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.productService.list().subscribe((products: Product[]) => {
      this.products = products.map((product: Product) => {
        return {
          ... product,
          hovered: false,
        };
      });
    });
  }

  hovered(product: ProductListElement): void { product.hovered = true; }
  unhovered(product: ProductListElement): void { product.hovered = false; }
}
