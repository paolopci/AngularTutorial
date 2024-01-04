import {NgModule} from '@angular/core';
import {DiscountService} from './discount.service'


import {PaDiscountDisplayComponent} from "./discountDisplay.component";
import {PaDiscountEditorComponent} from "./discountEditor.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PaDiscountDisplayComponent, PaDiscountEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DiscountService],  // qui metto i services!!!!!
  exports: [],
  bootstrap: []
})
export class ServiceModule {
}
