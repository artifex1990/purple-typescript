class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User('John Doe');
console.log(user);
user.name = 'Jane Doe 2';
console.log(user);

class Admin {
    role: number;
}
const admin = new Admin();
admin.role = 1;