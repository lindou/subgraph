import { GraphQLError } from 'graphql/error';

export enum ERROR_CODE {
    'E30000' = 30000,
    'E30001' = 30001,
    'E30002' = 30002,
    'E30003' = 30003,
    'E30004' = 30004,
}

const ERROR_MESSAGE = Object.freeze(
    new Map<ERROR_CODE, string>([
        [ERROR_CODE.E30000, 'Error in retrieving the device info.'],
        [ERROR_CODE.E30001, 'Error in retrieving the device info.'],
        [ERROR_CODE.E30002, 'Invalid financeLock. financeLock must be yes/no/na.'],
        [ERROR_CODE.E30003, 'Invalid imeiNumber. imeiNumber must have a length of 14 or 15.'],
        [ERROR_CODE.E30004, 'Invalid deviceBrand. deviceBrand must be apple or samsung.'],
    ])
);
export const throwGraphQLError = (errorCode: ERROR_CODE) => {
    throw new GraphQLError(ERROR_MESSAGE.get(errorCode) || '', {
        extensions: {
            code: errorCode,
        },
    });
};
