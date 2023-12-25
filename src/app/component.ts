import {Component, ApplicationRef} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'


@Component({
  selector: "app",
  templateUrl: './template.html'
})
export class ProductComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }


  FontSizeWithUnits: string = "30px";
  FontSizeWithOutUnits: string = "30";

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");
  }


  getClasses(key: number): string {
    let product = this.model.getProduct(key);

    return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");

    //return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
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


}
