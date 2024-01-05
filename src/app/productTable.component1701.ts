import {Component, Input} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";



@Component({
  selector: "paProductTable1701",
  templateUrl: './productTable.component1701.html'
})
export class ProductTableComponent1701 {


// questo è il component child.
  @Input('model')
  dataModel: Model | undefined;


  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }

  deleteProduct(key: number = 0) {
    this.dataModel?.deleteProduct(key);
  }
}
