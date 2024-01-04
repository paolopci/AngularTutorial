import {Component, Input, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
  selector: "paProductTable1602",
  templateUrl: './productTable.component1602.html'
})
export class ProductTableComponent1602 {

  taxRate: number = 0;
  categoryFilter: string = '-- Select category --';
  itemCount: number = 0;


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
