function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    while(true){}
}

function rec(): never {
    return rec();
}

type paymentActon = 'refunds' | 'checkout' | 'reject';

function processAction(action: paymentActon) {
    switch(action) {
        case 'refunds':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            const _: never = action;
            throw new Error('Invalid action');
    }
}


function setTypeToBoolean(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('fsdfdsf');
}