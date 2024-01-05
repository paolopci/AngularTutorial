import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'
import {NgModel, ValidationErrors} from "@angular/forms";


@Component({
  selector: "app05",
  templateUrl: './template05.html'
})
export class ProductComponent05 {
  model: Model = new Model();
  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  getProduct(id: number): Product | undefined {

    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(product: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }

}
