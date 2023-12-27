import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'


@Component({
  selector: "app02",
  templateUrl: './template02.html'
})
export class ProductComponent02{
  model: Model = new Model();
}
