import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'

@Component({
  selector: "app1701",
  templateUrl: './template1701.html'
})
export class ProductComponent1701 {
  

constructor(public model:Model) {
}
  addProduct(newProduct: Product) {
    this.model.saveProduct(newProduct);
  }
}
