import {Component, Input} from "@angular/core";
import {IProduct} from "src/app/models/products";


@Component({
  selector:'app-product',
  templateUrl:'product.component.html',
})

export class ProductComponent {
  @Input() Product:IProduct;
  title = "Angular App"
  isMoreVisible = false

}
