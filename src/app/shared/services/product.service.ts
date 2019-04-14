import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'https://angular-guide-firebase.firebaseio.com';
  UID = 'iNURmEqjH6R5POfr271nK2OBJ5G3';
  TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNjAwMjk1MjI3ODA5M2RmODA3YzkxMGNjYTBmODE3YmI4ODcxY2YifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5ndWxhci1ndWlkZS1maXJlYmFzZSIsImF1ZCI6ImFuZ3VsYXItZ3VpZGUtZmlyZWJhc2UiLCJhdXRoX3RpbWUiOjE1MzU1NTEwOTMsInVzZXJfaWQiOiJpTlVSbUVxakg2UjVQT2ZyMjcxbksyT0JKNUczIiwic3ViIjoiaU5VUm1FcWpINlI1UE9mcjI3MW5LMk9CSjVHMyIsImlhdCI6MTUzNTU1MTA5MywiZXhwIjoxNTM1NTU0NjkzLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N3-zy-5KLB72T9O839rQJ4u94749j8KceOh-WLs5tCuv1lZ4S6Xw6nh8wFkzdt55Fj2cprKmPZNzWVlirWDTJr1sg4vGQclSPsz31AXUIbkD9WqLPsCtphW3tIdaJA7gTX5PQLtQXm1BlvX55i-UWGe9U7t07lNwmaOD-Ezue30-ObKON5B2g0JO1gV3p8Y5zK4Z3KoLWrTzjJ1NZEPQRPEtkuO3R9-OOWnQJByXoAyvLFrXZOULJK0BlpYDTouWxe04Ao099RsammtqVG2LmLXnj99FfhhVqoEZn4YvyG0KZpXdlgazVLTI_ssN_6XXNBtZXAvib_QGTJi-1BEarA';

  products = [
    new Product(1, 'Angular入門書「天地創造の章」', 3800, '神は云った。「Angularあれ」。するとAngularが出来た。'),
    new Product(2, 'Angularを覚えたら、年収も上がって、女の子にももてて、人生が変わりました！', 410, '年収300万のSEが、Angularと出会う。それは、小さな会社の社畜が始めた、最初の抵抗だった。'),
    new Product(3, '異世界転生から始めるAngular生活(1)', 680,
      'スパゲッティの沼でデスマーチ真っ最中の田中。過酷な日々からの現実逃避か彼は、異世界に放り出され、そこでAngularの入門書を拾う。現実逃避でさえ、プログラミングをするしかない彼に待ち受けるのは！？'),
  ];

  constructor(
    private http: HttpClient,
  ) {
  }

  list(): Observable<Product[]> {
    return this.http.get(`${this.BASE_URL}/users/${this.UID}/products.json`, { params: { auth: this.TOKEN } }).pipe(
      map((response: any) => {
          if (response) {
            return Object.keys(response).map((key: string) => {
              const prd = response[key];
              return new Product(key, prd.name, prd.price, prd.description);
            });
          } else {
            return [];
          }
        }
      )
    );
  }

  get(key: string): Observable<Product> {
    return this.http.get(`${this.BASE_URL}/users/${this.UID}/products/${key}.json`, { params: { auth: this.TOKEN } }).pipe(
      map((response: any) => {
        return new Product(key, response.name, response.price, response.description);
      })
    );
  }

  update(product: Product): Observable<void> {
    return this.http.patch(`${this.BASE_URL}/users/${this.UID}/products/${product.key}.json`, {
      name: product.name,
      price: product.price,
      description: product.description
    }, { params: { auth: this.TOKEN } }).pipe(
      map(() => {})
    );
  }

  delete(key: string): Observable<void> {
    return this.http.delete(`${this.BASE_URL}/users/${this.UID}/products/${key}.json`, { params: { auth: this.TOKEN }}).pipe(
      map(() => {})
    );
  }

  create(product: Product): Observable<void> {
    return this.http.post(`${this.BASE_URL}/users/${this.UID}/products.json`, product, { params: { auth: this.TOKEN } }).pipe(
      map((response: any) => product.key = response.name),
    );
  }
}
