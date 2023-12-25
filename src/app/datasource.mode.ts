import {Product} from "./product.model";

export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, "kayak", "Watersports", 275),
      new Product(2, "ball", "soccer", 27.99),
      new Product(3, "Soccer ball", "soccer", 275.11),
      new Product(4, "kayak", "Watersports", 275),
      new Product(5, "Lifejacket", "Watersports", 48.95),
      new Product(6, "Basket Ball", "Basket", 19.50),
      new Product(7, "Corner Flags", "Soccer", 34.95),
      new Product(8, "Thinking Cap", "Chess", 16)
    )

  }

  getData(): Product[] {
    return this.data;
  }
}
