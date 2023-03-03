import { Component } from '@angular/core';
import {Observable, tap} from "rxjs";
import {IProduct} from "src/app/models/products";
import {ProductsService} from "src/app/services/products.service";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'Angular';
  products$ :Observable<IProduct[]>
  term = ''
  loading = false
  constructor(
    private productService:ProductsService,
    public modalService:ModalService
  ) {
  }



  async ngOnInit(){
    this.loading = true
    this.products$ = await this.productService.getAll().pipe(
      tap(() => {
        this.loading = false
      }),
    )
  }


}
