"use strict";
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error('Can\'t checkout. Products not found.');
        }
        if (!this.delivery) {
            throw new Error('Can\'t checkout. Delivery not selected.');
        }
        return { success: true };
    }
}
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class DeliveryHome extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class DeliveryShop extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
const product1 = new Product(1, "Iphone", 1000);
const product2 = new Product(2, "Samsung", 1200);
const cart = new Cart();
const deliveryHome = new DeliveryHome(new Date(), "Moscow");
const deliveryPvz = new DeliveryShop(1);
cart.addProduct(product1);
cart.addProduct(product2);
console.log(cart);
console.log(cart.getSum());
cart.setDelivery(deliveryHome);
console.log(cart);
cart.deleteProduct(2);
console.log(cart);
console.log(cart.checkOut());
