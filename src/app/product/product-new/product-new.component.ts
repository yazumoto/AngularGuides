import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-newj',
  templateUrl: './product-new.component.html',
  styleUrls: ['../product-edit/product-edit.component.scss']
})
export class ProductNewComponent implements OnInit {
  productForm = this.fb.group({
    name: [''],
    price: ['', Validators.min(100)],
    description: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
  ) {}

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }

  ngOnInit() {}

  saveProduct(): void {
    if (this.productForm.valid) {
      const { name, price, description } = this.productForm.getRawValue();
      this.productService.create(new Product(null, name, price, description)).subscribe(() => {});
    }
  }
}
