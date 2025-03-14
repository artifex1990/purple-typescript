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

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlt(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function setRole(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('Пользователь не админ!');
    }
}