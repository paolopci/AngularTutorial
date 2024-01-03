import {Component, Output, EventEmitter} from "@angular/core";
import {Product} from "./product.model";


@Component({
  selector: "paProductForm",
  templateUrl: './productForm.component.html',
  //styles:["div {background-color: lightgreen}","div {font-weight: lighter;}"]
  //styles:["div {background-color: lightgreen; font-weight: lighter;}"]
 // styleUrls:["productForm.component.css"]
})
export class ProductFormComponent {
  newProduct: Product = new Product();

  @Output("paNewProduct")
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    this.newProductEvent.emit(this.newProduct);
    this.newProduct=new Product();
    form.resetForm();
  }

}
