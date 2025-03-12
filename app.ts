function getFullName(userEntity: { firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Павел',
    surname: 'Петров',
    city: 'Белгород',
    age: 34,
    skills: {
        dev: true,
        devops: true
    }
}

console.log(getFullName(user));