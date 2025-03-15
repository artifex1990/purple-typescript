"use strict";
class Logger {
    printDate(message) {
        this.log(`${new Date().toString()}: ${message}`);
    }
}
class ConsoleLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(date, message) {
        console.log(date);
        this.printDate(message);
    }
}
new ConsoleLogger().logWithDate(new Date(), 'Hello World');
