import {
    DeviceByIDRequest,
    DeviceByDetailsRequest,
    DevicesRequest,
    ScreenBehaviors,
    LocationDirection,
    ModelTypes,
} from '@lib/types/device';
import { DateTimeResolver } from 'graphql-scalars';

export const resolvers = {
    DateTime: DateTimeResolver,
    ScreenBehaviors,
    LocationDirection,
    ModelTypes,
    Query: {
        deviceByID: async (_source: any, deviceByIDRequest: DeviceByIDRequest, { deviceAPI }: any) => {
            return deviceAPI.deviceByID(deviceByIDRequest);
        },
        deviceByDetails: async (_source: any, deviceByDetailsRequest: DeviceByDetailsRequest, { deviceAPI }: any) => {
            return deviceAPI.deviceByDetails(deviceByDetailsRequest);
        },
        devices: async (_source: any, devicesRequest: DevicesRequest, { deviceAPI }: any) => {
            return deviceAPI.devices(devicesRequest);
        },
    },
    Device: {
        __resolveReference(device: unknown) {
            return device;
        },
    },
};
