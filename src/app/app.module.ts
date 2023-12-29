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
import {FormsModule} from '@angular/forms'
import {PaAttrDirective} from './attr.directive' // directive!!!!
import {PaModel} from './twoway.directive' // directive!!!!
import {ExtendDirective} from './extend.directive' // directive!!!!

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductComponent02, ProductComponent03, ProductComponent04,
    ProductComponent05, ProductComponent06, ProductComponent1301, PaAttrDirective, ProductComponent1302,
    ProductComponent1303, PaModel,ExtendDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent1303]
})
export class AppModule {
}
