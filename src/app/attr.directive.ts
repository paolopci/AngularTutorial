import {Attribute, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: "[pa-attr]",
})
export class PaAttrDirective {
  constructor(element: ElementRef, @Attribute('pa-attr-class') miaClass: string) {
    element.nativeElement.classList.add(miaClass || "table-success", "fw-bold");
  }
}
