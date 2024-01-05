import {NgModule} from '@angular/core';
import {DiscountService} from './discount.service'
import {LogService} from "./log.service";


import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DiscountService,
   // {provide: LogService, useClass: LogService}],  // qui metto i services!!!!!
    {provide: 'logger', useClass: LogService}],  // qui metto i services!!!!!
  exports: [],
  bootstrap: []
})
export class ServiceModule {
}
