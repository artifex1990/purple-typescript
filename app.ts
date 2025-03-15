class UserService {
    //static name: string = 'afda'; нельзя использовать конфликт со встроенным свойством name
    private static db: any;

    constructor(public id: number) {}

    static getUser(id: number) {
        return UserService.db.findById(id);
    }

    create() {
        UserService.db;
    }

    static {
        // асинхронные операции не разрешены
        UserService.db = `new Database()`;
    }
}

UserService.getUser(1);
const inst = new UserService(1);
inst.create();