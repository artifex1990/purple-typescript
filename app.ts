interface ILogger {
    log(...args): void;
    error(...args): void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
    error(...args: any[]): void {
        console.log(...args);
    }
}

interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}

interface IDeletable {
    delete(): void;
}

class User implements IPayable, IDeletable {
    delete(): void {
        throw new Error("Method not implemented.");
    }
    pay(paymentId: number | string): void {

    }
}