enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

const res = {
    message: "Платёж успешен",
    statusCode: StatusCode.SUCCESS
}

if (res.statusCode === StatusCode.SUCCESS) {}

function action(status: StatusCode) {

}

const enum Roles {
    ADMIN = 1,
    USER = 2
}

const userRole = Roles.ADMIN;