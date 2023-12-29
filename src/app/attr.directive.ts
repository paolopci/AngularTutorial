﻿import {
  Directive,
  ElementRef,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
  HostListener,
  HostBinding
} from "@angular/core";
import {Product} from './product.model'

@Directive({
  selector: "[pa-attr]"
})
export class PaAttrDirective {


  @Input("pa-attr")
  @HostBinding("class")
  bgClass: string | null = "";

  @Input("pa-product")
  product: Product = new Product();

  @Output("pa-category")
  click = new EventEmitter<Product>();

  @HostListener("click")
  triggerCustomEvent() {
    if (this.product != null){
      this.click.emit(this.product);
    }
  }

}
