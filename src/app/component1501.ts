import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'

@Component({
  selector: "app1501",
  templateUrl: './template1501.html'
})
export class ProductComponent1501 {
  model: Model = new Model();


  addProduct(newProduct: Product) {
    this.model.saveProduct(newProduct);
  }
}
