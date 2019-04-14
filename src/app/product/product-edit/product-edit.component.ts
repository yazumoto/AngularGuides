import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenWordValidator } from '../../shared/validators/forbidden-word';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm = this.fb.group({
    key: [''],
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

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.get(params['id']).subscribe((product: Product) => {
        this.productForm.setValue({
          key: product.key,
          name: product.name,
          price: product.price,
          description: product.description,
        });
      });
    });
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      const { key, name, price, description } = this.productForm.getRawValue();
      this.productService.update(new Product(key, name, price, description)).subscribe(() => {
        this.router.navigate(['/products', this.productForm.controls.key.value]);
      });
    }
  }
}
