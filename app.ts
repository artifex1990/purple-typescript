type DeliveryOptions  = DeliveryHome | DeliveryShop;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public deleteProduct(productId: number): void {
        this.products = this.products.filter((p: Product) => p.id !== productId);
    }

    public getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2, 0);
    }

    public setDelivery(delivery: DeliveryOptions) {
        this.delivery = delivery;
    }

    public checkOut() {
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
    constructor(
        public id: number, 
        public title: string, 
        public price: number
    ) { }
}

class Delivery {
    constructor(
        public date: Date
    ) {}
}

class DeliveryHome extends Delivery {
    private _address: string;

    constructor(date: Date, public address: string) {
        super(date);
    }
}

class DeliveryShop extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
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