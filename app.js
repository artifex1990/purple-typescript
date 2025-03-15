"use strict";
class Cart {
    constructor() {
        this.products = [];
    }
    hasProductToCart(id) {
        return this.products.find(p => p.id === id) !== undefined;
    }
    addProduct(product) {
        if (this.hasProductToCart(product.id)) {
            return;
        }
        this.products.push(product);
    }
    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
    }
    calculateTotal() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
    set delivery(delivery) {
        this._delivery = delivery;
    }
    get delivery() {
        return this._delivery;
    }
    checkout() {
        return this.delivery !== undefined && this.products.length !== 0;
    }
}
class Product {
    constructor(id, title, price) {
        this._id = id;
        this._title = title;
        this._price = price;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
}
class Delivery {
    constructor(date) {
        this._date = date;
    }
    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
}
class DeliveryHome extends Delivery {
    constructor(date, address) {
        super(date);
        this._address = address;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
}
class DeliveryPvz extends Delivery {
    constructor(idPvz) {
        super(new Date());
        this._idPvz = idPvz;
    }
    get idPvz() {
        return this._idPvz;
    }
    set idPvz(idPvz) {
        this._idPvz = idPvz;
    }
}
const product1 = new Product(1, "Iphone", 1000);
const product2 = new Product(2, "Samsung", 1200);
const cart = new Cart();
const deliveryHome = new DeliveryHome(new Date(), "Moscow");
const deliveryPvz = new DeliveryPvz(1);
console.log(cart.checkout());
cart.addProduct(product1);
cart.addProduct(product2);
console.log(cart);
console.log(cart.calculateTotal());
cart.delivery = deliveryHome;
console.log(cart);
cart.deleteProduct(2);
console.log(cart);
console.log(cart.checkout());
