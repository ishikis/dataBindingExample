import { Product } from './product.model';

export class SimpleDataSource {

    private product: Product[];
    constructor(
    ) {
        this.product = new Array<Product>(
            new Product(1, "Samsung s5", "iyi telefon", "1.jpeg", 1000),
            new Product(2, "Samsung s6", "iyi telefon", "1.jpeg", 2000),
            new Product(3, "Samsung s7", "iyi telefon", "1.jpeg", 3000),
            new Product(4, "Samsung s8", "iyi telefon", "1.jpeg", 4000),
            new Product(5, "Samsung s9", "iyi telefon", "1.jpeg", 5000),
        );
    }
    getProducts(): Product[] {
        return this.product;
    }

}