class UserBuilder {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: [];
}

const res = new UserBuilder().setName('John');
const re1s = new AdminBuilder().setName('John');

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
    console.log(user);
} else {
    console.log(user);
}