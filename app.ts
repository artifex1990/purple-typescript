interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

function isFailed(res: IResponseSuccess | IResponseFailed): res is IResponseFailed {
    return res.status === PaymentStatus.Failed;
}
function isSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
    return res.status === PaymentStatus.Success;
}

const fun: f = (res: IResponseSuccess | IResponseFailed): number => {
    switch (res.status) {
        case PaymentStatus.Success: 
            return res.data.databaseId;
        case PaymentStatus.Failed: 
            console.log(res.data.errorMessage);
            return res.data.errorCode;
    }
}

fun({status: PaymentStatus.Failed, data: {errorCode: 400, errorMessage: 'error'}} as IResponseSuccess | IResponseFailed);