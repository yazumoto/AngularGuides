import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.productService.get(2).subscribe((product: Product) => {
      this.product = product;
    });
  }

  saveProduct(): void {
    console.log(this.product);
    this.router.navigate(['/products']);
  }
}
