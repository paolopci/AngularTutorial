import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'


@Component({
  selector: "app03",
  templateUrl: './template03.html'
})
export class ProductComponent03 {
  model: Model = new Model();
  selectedProduct: string | undefined;

  getProduct(id: number): Product | undefined {

    return this.model.getProduct(id);
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }


  getProducts(): Product[] {
    return this.model.getProducts();
  }


}
