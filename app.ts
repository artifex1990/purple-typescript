enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed"
}

interface IPayment {
    sum: number;
    from: number;
    to: number;
}

interface IPaymentsRequest extends IPayment {}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS,
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.FAILED,
    data: IDataFailed
}

async function payment(request: IPaymentsRequest): Promise<IResponseSuccess | IResponseFailed> {
    return new Promise((resolve, reject) => {
        try {
            const success: IResponseSuccess = {
                status: PaymentStatus.SUCCESS,
                data: {
                    databaseId: 1,
                    ...request
                }
            }

            resolve(success);
        } catch (error) {
            return reject(error);
        }
    });
}