import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewComponent } from './product-create.component';

describe('ProductCreateComponent', () => {
  let component: ProductNewComponent;
  let fixture: ComponentFixture<ProductNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
