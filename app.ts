interface User {
    login: string;
    password?: string;
}

const user: User = {
    login: 'a@a.ru',
    password: '1',
}

function multiple(first: number, second?: number): number {
    return second ? first * second : first  * first;
}

console.log(multiple(2,3));

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary';
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

function test(param?: string) {
    const t = param ?? multiple(5);
}