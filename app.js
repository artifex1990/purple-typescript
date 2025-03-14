"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.find(user => user.name === name);
    }
    toString() {
        return this.map(user => user.name).join(", ");
    }
}
const users = new Users();
users.push(new User("Vasya"));
users.push(new User("Petya"));
console.log(users.toString());
