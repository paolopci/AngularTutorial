import {NgModule} from '@angular/core';
import {DiscountService} from './discount.service'
import {LogService, LOG_SERVICE} from "./log.service";
import {SpecialLogService} from "./specialLog.service";


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
    // {provide: 'logger', useClass: LogService},
    // {provide: LOG_SERVICE, useClass: LogService}
    {provide: LOG_SERVICE, useClass: SpecialLogService}
  ],  // qui metto i services!!!!!
  exports: [],
  bootstrap: []
})
export class ServiceModule {
}
