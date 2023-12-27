import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ProductComponent} from "./component";
import {ProductComponent02} from "./component02";
import {ProductComponent03} from "./component03";
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductComponent02, ProductComponent03
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent03]
})
export class AppModule {
}
