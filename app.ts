class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Users extends Array<User> {
    searchByName(name: string) {
        return this.find(user => user.name === name);
    }

    override toString(): string {
        return this.map(user => user.name).join(", ");
    }
}


const users = new Users();
users.push(new User("Vasya"));
users.push(new User("Petya"));
console.log(users.toString());

class UserList {
    users: User[];

    push(user: User) {
        this.users.push(user);
    }

    constructor(users: User[]) {
        this.users = users;
    }

    searchByName(name: string) {
        return this.users.find(user => user.name === name);
    }
}

class Payment {
    date: Date;
}

class UserWithPayment extends Payment {
    name: string;
}

class UsersWithPayment2 {
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment) {
        this.user = user;
        this.payment = payment;
    }
}