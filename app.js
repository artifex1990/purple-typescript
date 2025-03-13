"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Платёж успешен",
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) { }
function action(status) {
}
function compute() {
    return 3;
}
const userRole = 1 /* Roles.ADMIN */;
