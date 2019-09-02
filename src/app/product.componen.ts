import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();

    getClasses(id: number): string {
        let product = this.model.getProductById(id);
        return (product.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2"
    }
    v_disabled = true;

    product: Product = this.model.getProductById(1);

    color: string = "Red";

    mail:string = "mail@xyz.com";

    fontSize: string = "25px";

    onSubmit($event) {
        console.log('buttona tıklandı');
        console.log($event);
    }


    onKeyUp($event) {
        if ($event.keyCode == 13)
            console.log("Enter e basıldı");
    }

    onKeyUp2($event) {
        console.log($event.target.value);
    }


    onKeyUp3(email: string) {
        console.log(email);
    }

    
    onKeyUp4() {
        console.log(this.mail);
    }
}