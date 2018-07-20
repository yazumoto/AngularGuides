export class Product {
  id: number;
  name: string;
  price: number;
  description: string;

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
