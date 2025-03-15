class User {
    role?: 'admin' | 'user';
    constructor(private name: string) {}
    login() {}
}

function createUser(user: User) {
    // @ts-ignore
    const defaultUser = new User('Default User');
    // defaultUser.role = undefined;

    switch(user.role) {
        case 'admin':
            const a = 7;
        case 'user':
            return true;
            const c = 1;
    }
}

interface IChecks {
    
    [check: string]: boolean;
}

const c: IChecks = {};
const d = c['drive'];
// c.drive;


class VipUser extends User {
    override login(): void {
        
    }
}