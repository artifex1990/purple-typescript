"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Павел',
    surname: 'Петров',
    city: 'Белгород',
    age: 34
};
console.log(getFullName(user));
