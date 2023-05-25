import logger from '@lib/logger';
import {
    DeviceByIDRequest,
    DeviceByDetailsRequest,
    DevicesRequest,
} from '@lib/types/device';
import { ERROR_CODE, throwGraphQLError } from '@lib/device-error';

/**
 * Retrieves the device for a given imei.
 * @param {DeviceRequest} deviceByIDRequest
 * @returns {boolean} Returns true
 */
export async function getDeviceByID(deviceByIDRequest: DeviceByIDRequest) {
    logger.trace(deviceByIDRequest, 'Entering getDeviceByID');
    const device = {
        id: 501,
        model: 'Galaxy S20',
        carrier: 'T-Mobile',
    };
    return device;
}

/**
 * Retrieves the device for a given imei.
 * @param {DeviceRequest} deviceByDetailsRequest
 * @returns {boolean} Returns true
 */
export async function getDeviceByDetails(deviceByDetailsRequest: DeviceByDetailsRequest) {
    logger.trace(deviceByDetailsRequest, 'Entering getDeviceByDetails');
    const device = {
        id: 111,
        model: 'iPhone 11',
        carrier: 'Sprint',
    };
    return device;
}

/**
 * Retrieves the device for a given imei.
 * @param {DeviceRequest} devicesRequest
 * @returns {boolean} Returns true
 */
export async function getDevices(devicesRequest: DevicesRequest) {
    logger.trace(devicesRequest, 'Entering getDevices');
    const device = [
        {
            id: 156,
            model: 'iPhone 12',
            carrier: 'Verizon',
        },
        {
            id: 93,
            model: 'Note 2',
            carrier: 'AT&T',
        },
    ];
    return device;
}