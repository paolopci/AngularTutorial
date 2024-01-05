import {Injectable, Inject} from "@angular/core";
import {LogService} from "./log.service";


@Injectable()


export class DiscountService {


  private discountValue: number = 10;



  // constructor(private logger: LogService) {
  // }
   constructor(@Inject('logger') private logger: LogService) {
   }


  public get discount(): number {
    return this.discountValue;
  }

  public set discount(newValue: number) {
    this.discountValue = newValue;
  }

  public applyDiscount(price: number): number {
    this.logger.logInfoMessage(`Discount ${this.discount} applied to price: ${price}`);

    return Math.max(price - this.discountValue, 5);
  }
}
