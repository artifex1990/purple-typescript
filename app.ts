let a = 5;
let b: string = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();

let c = 'adf';
let d: number = parseInt(c);

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'Владилен',
    email: 'vladilen@mail.ru',
    login: 'vladilen'
}

interface Admin {
    name: string;
    role: number;
}

const admin: Admin = {
    ...user,
    role: 1
}

function userToAdmin(user: User): Admin {
    return {
        name: user.login,
        role: 1
    }
}