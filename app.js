"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var user = new User('John Doe');
console.log(user);
user.name = 'Jane Doe 2';
console.log(user);
