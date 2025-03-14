class User {
    _login: string;
    password: string;
    createdAt: Date;

    set login(l: string | number) {
        this._login = 'user-' + l;
        this.createdAt = new Date();
    }

    get login(): string {
        return this._login;
    }

    async getPassword(p: string) {

    }
}

const user = new User();
user.login = 'myLogin';
console.log(user);
