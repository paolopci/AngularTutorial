import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

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
import {ProductTableComponet} from "./productTable.component";
import {ProductFormComponent} from "./productForm.component";
import {FormsModule} from '@angular/forms'
import {PaAttrDirective} from './attr.directive' // directive!!!!
import {PaModel} from './twoway.directive' // directive!!!!
import {ExtendDirective} from './extend.directive' // directive!!!!
import {PaStructureDirective} from './structure.directive' // directive!!!!
import {PaIteratorDirective} from './iterator.directive' // directive!!!!
import {PaCellColor} from './cellColor.directive' // directive!!!!
import {PaCellColorSwitcher} from './cellColorSwitcher.directive' // directive!!!!

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductComponent02, ProductComponent03, ProductComponent04, ProductComponent1401,
    ProductComponent05, ProductComponent06, ProductComponent1301, PaAttrDirective, ProductComponent1302, ProductComponent1403,
    ProductComponent1303, PaModel, ExtendDirective, PaStructureDirective, ProductComponent1402, PaIteratorDirective, PaCellColor,
    PaCellColorSwitcher, ProductComponent1501, ProductComponent1501, ProductTableComponet, ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent1501]
})
export class AppModule {
}
