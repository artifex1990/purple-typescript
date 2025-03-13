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

interface IFailedData {
    errorMessage: string,
    errorCode: number
}

interface ISuccessData extends IPaymentsRequest {
    databaseId: number;
}

interface IResponseSuccess {
    status: PaymentStatus,
    data: ISuccessData
}

interface IResponseFailed {
    status: PaymentStatus,
    data: IFailedData
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