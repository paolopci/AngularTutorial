import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {ProductComponent1701} from "./component1701";
import {ProductTableComponent1701} from "./productTable.component1701";
import {ProductFormComponent} from "./productForm.component";
import {PaToggleView} from "./toggleView.component";
import {PaDiscountEditorComponent} from './services/discountEditor.component'
import {PaDiscountDisplayComponent} from "./services/discountDisplay.component";


import {PaAttrDirective} from './attr.directive' // directive!!!!
import {PaModel} from './twoway.directive' // directive!!!!
import {ExtendDirective} from './extend.directive' // directive!!!!
import {PaStructureDirective} from './structure.directive' // directive!!!!
import {PaIteratorDirective} from './iterator.directive' // directive!!!!
import {PaCellColor} from './cellColor.directive' // directive!!!!
import {PaCellColorSwitcher} from './cellColorSwitcher.directive' // directive!!!!
import {PaDiscountAmountDirective} from './directives/discountAmount.directive' // directive!!!!


import {Model} from './repository.model'



import {PaAddTaxPipe} from './pipe/addTax.pipe' // pipe!!!!
import {PaCategoryFilterPipe} from './pipe/categoryFilter.pipe' // pipe!!!!
import {PaDiscountPipe} from './pipe/discount.pipe' // pipe!!!!

// add nuovo module della cartella services
import {ServiceModule} from "./services/service.module";
// -------------------------------------------------------------
// imposto il formato locale IT per i numeri
import {LOCALE_ID} from "@angular/core";
import localIt from '@angular/common/locales/it'
import {registerLocaleData} from "@angular/common";
import {DiscountService} from "./services/discount.service";

registerLocaleData(localIt);

// -------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,  PaAttrDirective, PaModel, ExtendDirective, PaStructureDirective, PaIteratorDirective, PaCellColor,
    PaCellColorSwitcher, ProductFormComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe, ProductTableComponent1701,
    ProductComponent1701, PaDiscountEditorComponent, PaDiscountDisplayComponent,
    PaDiscountPipe, PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule, ServiceModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [DiscountService,Model,{provide: LOCALE_ID, useValue: 'it-IT'}],
  bootstrap: [ProductComponent1701]
})
export class AppModule {
}
