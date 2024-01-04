import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'

@Component({
  selector: "app1601",
  templateUrl: './template1601.html'
})
export class ProductComponent1601 {
  model: Model = new Model();


  addProduct(newProduct: Product) {
    this.model.saveProduct(newProduct);
  }
}
