import {Component, Input} from "@angular/core";
import {DiscountService} from "./discount.service";

@Component({
  selector: 'paDiscountDisplay',
  templateUrl: './discountDisplay.component.html'
})
export class PaDiscountDisplayComponent {

  // @Input("discounter")
  // discounter?: DiscountService

  constructor(public discounter: DiscountService) {}  // Di per il servizio che voglio usare al posto @Input()

}
