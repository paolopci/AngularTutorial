import {Component, Input, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
  selector: "paProductTable1605",
  templateUrl: './productTable.component1605.html'
})
export class ProductTableComponent1605 {

  taxRate: number = 0;
  categoryFilter: string = '-- Select category --';
  itemCount: number = 0;
  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = "2020-02-20T00:00:00.000Z";
  dateNumber: number = 1582156800000;

  selectMap = {
    "Watersports": "stay dry",
    "Soccer": "score goals",
    "Basket": "Great @@@ multi points @@@",
    "other": "have fun"
  }


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
