abstract class Logger {
    abstract log(message: string): void;

    printDate(message: string): void {
        this.log(`${new Date().toString()}: ${message}`);
    }
}

class ConsoleLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(date: Date, message: string): void {
        console.log(date);
        this.printDate(message);
    }
}

new ConsoleLogger().logWithDate(new Date(), 'Hello World');