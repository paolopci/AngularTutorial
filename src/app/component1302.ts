import {Component} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from './product.model'
import {NgModel, ValidationErrors, NgForm} from "@angular/forms";


@Component({
  selector: "app1301",
  templateUrl: './template1301.html'
})
export class ProductComponent1301 {
  model: Model = new Model();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  getProduct(id: number): Product | undefined {

    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }


  // ---------- gestione della validazione con msg di errore --------------------
  getMessages(errs: ValidationErrors | null, name: string): string[] {
    let messages: string[] = [];
    for (let errorName in errs) {
      switch (errorName) {
        case "required":
          messages.push(`You must enter a ${name}`);
          break;
        case "minlength":
          messages.push(`A ${name} must be at least ${errs['minlength'].requiredLength} characters`);
          break;
        case "pattern":
          messages.push(`The ${name} contains illegal characters`);
          break;
        case"max":
          messages.push(`The ${name} <1000>`);
          break;
      }
    }
    return messages;
  }

  getValidationMessages(state: NgModel, thingName?: string) {
    let thing: string = state.path?.[0] ?? thingName;
    return this.getMessages(state.errors, thing);
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.resetForm();
      this.formSubmitted = false;
    }
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getMessages(form.controls[k].errors, k).forEach(m => messages.push(m));
    });
    return messages;
  }

// -------------------- Validazione msg di errori ---------------------------------

// ---------------------  cap 13  -------------------------------

  addProduct(newProduct: Product) {
    this.model.saveProduct(newProduct);
  }


}
