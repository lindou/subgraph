import { RESTDataSource } from '@apollo/datasource-rest';
import logger from '@lib/logger';
import DeviceMocks from '../../mocks.json';
import { MANUFACTURER } from '@lib/types/device';

interface QueryInputDeviceID {
  id: string;
}

interface QueryInputDeviceDetails {
  input: {
    capacity: string;
    carrier: string;
    manufacturer: string;
    model: string;
  };
}

interface QueryInputDeviceFilter {
  searchParams: string;
}

export class DeviceAPI extends RESTDataSource {
  override baseURL = process.env.DEVICE_URL

  async deviceByID(deviceByIDRequest: QueryInputDeviceID) {
    logger.info(
      { deviceByIDRequest: deviceByIDRequest },
      'Entering deviceByID'
    );
    // request validation
    return this.get(`device/${encodeURIComponent(deviceByIDRequest.id)}`);
  }

  async deviceByDetails(deviceByDetailsRequest: QueryInputDeviceDetails) {
    logger.info(
      { deviceByDetailsRequest: deviceByDetailsRequest.input },
      'Entering deviceByDetails'
    );
    // request validation
    return this.post('device', {
      body: deviceByDetailsRequest.input
    });
  }

  async devices(devicesRequest: QueryInputDeviceFilter) {
    logger.info({ devicesRequest: devicesRequest }, 'Entering devices');

    // request validation
    return this.get(
      `devices?query=${encodeURIComponent(devicesRequest.searchParams)}`
    );
  }
}
