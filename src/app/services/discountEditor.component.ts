﻿import {Component} from "@angular/core";
import {DiscountService} from "./discount.service";


@Component({
  selector: 'paDiscountEditor',
  templateUrl: './discountEditor.component.html'
})
export class PaDiscountEditorComponent {

  // @Input('discounter')
  // discounter?: DiscountService

  constructor(public discounter: DiscountService) {}
}
