import {Component, Input, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
  selector: "paProductTable",
  templateUrl: './productTable.component.html'
})
export class ProductTableComponent {

  taxRate: number = 0;
  categoryFilter: string | undefined;
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
