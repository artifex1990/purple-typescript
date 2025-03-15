class Cart {
    private products: Product[] = [];
    private _delivery: Delivery;

    private hasProductToCart(id: number): boolean {
        return this.products.find(p => p.id === id) !== undefined;
    }

    addProduct(product: Product): void {
        if (this.hasProductToCart(product.id)) {
            return;
        }

        this.products.push(product);
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(p => p.id !== id);
    }

    calculateTotal(): number {
        return this.products.reduce((total, p) => total + p.price, 0);
    }

    set delivery(delivery: Delivery) {
        this._delivery = delivery;
    }

    get delivery(): Delivery {
        return this._delivery;
    }

    checkout(): boolean {
        return this.delivery !== undefined && this.products.length !== 0;
    }
}


class Product {
    private _id: number;
    private _title: string;
    private _price: number;

    constructor(id: number, title: string, price: number) {
        this._id = id;
        this._title = title;
        this._price = price;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }
    
    set title(title: string) {
        this._title = title;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }
}

class Delivery {
    protected _date: Date;

    constructor(date: Date) {
        this._date = date;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }
}

class DeliveryHome extends Delivery {
    private _address: string;

    constructor(date: Date, address: string) {
        super(date);
        this._address = address;
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
    }
}

class DeliveryPvz extends Delivery {
    private _idPvz: number;

    constructor(idPvz: number) {
        super(new Date());
        this._idPvz = idPvz;
    }

    get idPvz(): number {
        return this._idPvz;
    }

    set idPvz(idPvz: number) {
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