import {Pipe} from "@angular/core";
import {DiscountService} from "../services/discount.service";


@Pipe({
  name: 'discount',
  pure: false
})
export class PaDiscountPipe {

  constructor(private discount: DiscountService) {
  }

  transform(price: number=0): number {
    return this.discount.applyDiscount(price);
  }
}
