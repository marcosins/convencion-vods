/* eslint-disable no-console */
const { getVODS } = require('./utils/parser');
const FORMAT = process.argv?.[2]?.toUpperCase();

function printVODS () {
  getVODS(FORMAT)
    .then(console.log)
    .catch(console.error);
}

(printVODS());
