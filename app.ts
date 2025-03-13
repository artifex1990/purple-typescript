interface User {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
};

type User2 = {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
};

interface Role {
    roleId: number
}

interface UserWithRole extends User, Role {
    createdAt: Date;
}

let user: UserWithRole = {
    name: "John", 
    age: 30,
    skills: ['1', '2'],
    roleId: 123,
    createdAt: new Date(),

    log(id: number): string {
        return '123';
    }
}

interface UserDic {
    [index: number]: User
}

type UserDic2 = {
    [index: number]: User
}

type ud = Record<number, User>