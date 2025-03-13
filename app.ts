type User = {
    name: string,
    age: number,
    skills: string[]
};

type Role = {
    id: number,
    name: string
}

type UserWithRole = User & Role;
type UserWithRoleComposition = {
    user: User,
    role: Role
};

let user: UserWithRole = {
    name: "John",
    age: 30,
    skills: ['1', '2'],
    id: 1
}
