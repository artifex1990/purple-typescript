"use strict";
class User {
    set login(l) {
        this._login = 'user-' + l;
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
