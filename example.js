const LookupVehicle = require('./');

/**

// Traditional Promise Method
LookupVehicle
  .lookup('vinnumber')
  .then( (result) => {
    console.log(result.data);
  });

 */

/**

// Async-Await Method
let example = async () => {
  let vehicleInformation = await LookupVehicle.lookup('vinnumber');
  console.log(vehicleInformation.data);
  return;
};

Promise.resolve(example());

*/

/**

// Tradational Callback Method
LookupVehicle.lookup_callback('vinnumber', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

*/
