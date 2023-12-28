import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'


@Component({
  selector: "app02",
  templateUrl: './template02.html'
})
export class ProductComponent02 {
  model: Model = new Model();
  selectedProduct: string | undefined;

  getProduct(id: number): Product | undefined {

    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  handleInputEvent(ev: Event) {
    if (ev.target instanceof HTMLInputElement) {
      this.selectedProduct = ev.target.value;
    }
  }
}
