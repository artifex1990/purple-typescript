"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isFailed(res) {
    return res.status === PaymentStatus.Failed;
}
function isSuccess(res) {
    return res.status === PaymentStatus.Success;
}
const fun = (res) => {
    switch (res.status) {
        case PaymentStatus.Success:
            return res.data.databaseId;
        case PaymentStatus.Failed:
            console.log(res.data.errorMessage);
            return res.data.errorCode;
    }
};
fun({ status: PaymentStatus.Failed, data: { errorCode: 400, errorMessage: 'error' } });
