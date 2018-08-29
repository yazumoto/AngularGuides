export class Product {
  key: string;
  name: string;
  price: number;
  description: string;

  constructor(key, name, price, description) {
    this.key = key;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
