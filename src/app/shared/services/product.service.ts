import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNjAwMjk1MjI3ODA5M2RmODA3YzkxMGNjYTBmODE3YmI4ODcxY2YifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5ndWxhci1ndWlkZS1maXJlYmFzZSIsImF1ZCI6ImFuZ3VsYXItZ3VpZGUtZmlyZWJhc2UiLCJhdXRoX3RpbWUiOjE1MzQ5NTkxODUsInVzZXJfaWQiOiJpTlVSbUVxakg2UjVQT2ZyMjcxbksyT0JKNUczIiwic3ViIjoiaU5VUm1FcWpINlI1UE9mcjI3MW5LMk9CSjVHMyIsImlhdCI6MTUzNDk1OTE4NSwiZXhwIjoxNTM0OTYyNzg1LCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Q47wTcpXWucwxPk2oQ9-d_KTsjVIFNk0Eo1XDlAJ6N_-XaLyQSjavoX7jU1E6RK7gsd7WP-GKSAt9vj11gS7P0KiBSo66cbjd4nmEKlm2cZjs0dG2kGDFQ2nWCUqJ-bDJDstgbRtE3o5I4irrcR2sClE2lfAtdYyDUCMgCu4ytgm5y80WkiuhSpdR4Fd4aJGFZ-tf9rv8ccGRM1U4S2XHj7vmgJLaT8AkhmDdjH0DYY0GWW6le_VcMBARsKXeBX-JlRd70RdELKo1UpkH4Uhl5Np6tGEs816vVd3y_OameSe7diC8TEYkfwvVINdloo6dHR3WytKgxGhi8F_PbE_gw';

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
    return this.http.get(`https://angular-guide-firebase.firebaseio.com/products.json`, { params: { auth: this.TOKEN } }).pipe(
      map((response: any) =>
        Object.keys(response).map((key: string) => {
          const prd = response[key];
          return new Product(prd.id, prd.name, prd.price, prd.description);
        })
      )
    );
  }

  get(id: number): Observable<Product> {
    return of(this.products[id - 1]);
  }

  update(product: Product): void {
    const index = this.products.findIndex((prd: Product) => prd.id === product.id);
    this.products[index] = product;
  }
}
