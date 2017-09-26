const Axios = require('axios');

const NHTSA_URL                = 'https://vpic.nhtsa.dot.gov/api/';
const VEHICLE_DECODE_VIN_API   = 'vehicles/DecodeVinValuesExtended/';
const RESPONSE_FORMAT          = 'json';

class Vehicle {
  static async lookup (vin, opts) {
    return await Axios.get(`${NHTSA_URL}${VEHICLE_DECODE_VIN_API}${vin}?format=${RESPONSE_FORMAT}`, opts);
  }

  static lookup_callback(vin, callback) {
    this.lookup(vin)
      .then( (result) => callback(null, result.data))
      .catch( (err) => callback(err, null));
  }

}

module.exports = Vehicle;
