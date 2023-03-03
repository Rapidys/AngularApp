import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector:'create-product',
  templateUrl:'create-product.component.html'
})

export class CreateProductComponent {


  form = new FormGroup({
    title:new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl
  }

  submit() {
    console.log(this.form.value)
  }

}
