# Lookup a Vehicle in the United States
A Simple Node Module to Lookup a vehicle via a VIN number with the nhtsa.dot.gov API

[![npm version](https://img.shields.io/npm/v/lookup_vehicle.svg?style=flat-square)](https://www.npmjs.org/package/lookup_vehicle)

### Install

```
Using npm:

$ npm install lookup_vehicle
```

**functions**

- ***.lookup({String}, {AxiosConfig}) @return {promise}*** *async function*
- ***.lookup_callback({String}, {Callback}) callback*** *function*


```js
let LookupVehicle = require('lookup_vehicle');
```

#### Traditional Promise Method

```js
LookupVehicle
  .lookup('vinnumber')
  .then( (result) => {
    console.log(result.data);
  });
```

#### Async-Await Method

```js
let example = async () => {
  let vehicleInformation = await LookupVehicle.lookup('vinnumber');
  console.log(vehicleInformation.data);
  return;
};

Promise.resolve(example());
```

#### Tradational Callback Method

```js
LookupVehicle.lookup_callback('vinnumber', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
```