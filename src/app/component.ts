import {Component, ApplicationRef} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'


@Component({
  selector: "app",
  templateUrl: './template.html'
})
export class ProductComponent {
  model: Model = new Model();
  FontSizeWithUnits: string = "30px";
  FontSizeWithOutUnits: string = "30";
  targetName: string = 'kayak';
  counter: number = 1;
  selectedProduct: string | undefined;

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClasses(key: number): string {
    let product = this.model.getProduct(key);

    return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);

    return {
      "text-center bg-danger": product?.name == "kayak",
      "bg-info": (product?.price ?? 0) < 50
    };
  }

  getStyles(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      fontsize: "30px",
      "margin.px": 100,
      color: (product?.price ?? 0) > 50 ? "red" : "green"
    }
  }

  getProduct(id: number): Product | undefined {
    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    console.log("getProducts invoked");
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.model.getProducts().length;
  }

  get nextProduct(): Product | undefined {
    return this.model.getProducts().shift();
  }

  getProductPrice(id: number): number {
    return Math.floor(this.model.getProduct(id)?.price ?? 0);
  }
}
