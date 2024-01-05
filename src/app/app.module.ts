import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ProductComponent} from "./component";
import {ProductComponent02} from "./component02";
import {ProductComponent03} from "./component03";
import {ProductComponent04} from "./component04";
import {ProductComponent05} from "./component05";
import {ProductComponent06} from "./component06";
import {ProductComponent1301} from "./component1301";
import {ProductComponent1302} from "./component1302";
import {ProductComponent1303} from "./component1303";
import {ProductComponent1401} from "./component1401";
import {ProductComponent1402} from "./component1402";
import {ProductComponent1403} from "./component1403";
import {ProductComponent1501} from "./component1501";
import {ProductComponent1601} from "./component1601";
import {ProductComponent1701} from "./component1701";
import {ProductTableComponent} from "./productTable.component";
import {ProductTableComponent1602} from "./productTable.component1602";
import {ProductTableComponent1603} from "./productTable.component1603";
import {ProductTableComponent1604} from "./productTable.component1604";
import {ProductTableComponent1605} from "./productTable.component1605";
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

registerLocaleData(localIt);

// -------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductComponent02, ProductComponent03, ProductComponent04, ProductComponent1401,
    ProductComponent05, ProductComponent06, ProductComponent1301, PaAttrDirective, ProductComponent1302, ProductComponent1403,
    ProductComponent1303, PaModel, ExtendDirective, PaStructureDirective, ProductComponent1402, PaIteratorDirective, PaCellColor,
    PaCellColorSwitcher, ProductComponent1501, ProductComponent1501, ProductTableComponent, ProductFormComponent, PaToggleView,
    ProductComponent1601, PaAddTaxPipe, PaCategoryFilterPipe, ProductTableComponent1602, ProductTableComponent1603, ProductTableComponent1604
    , ProductTableComponent1605, ProductTableComponent1701, ProductComponent1701, PaDiscountEditorComponent, PaDiscountDisplayComponent,
    PaDiscountPipe
  ],
  imports: [
    BrowserModule, ServiceModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'it-IT'}],
  bootstrap: [ProductComponent1701]
})
export class AppModule {
}
