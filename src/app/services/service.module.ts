import {NgModule} from '@angular/core';
import {DiscountService} from './discount.service'



import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DiscountService],  // qui metto i services!!!!!
  exports: [
  ],
  bootstrap: []
})
export class ServiceModule {
}
