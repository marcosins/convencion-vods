const { getVODS } = require('./utils/parser');

const FORMAT = process.argv?.[2]?.toUpperCase();

async function printVODS() {
  try {
    const text = await getVODS(FORMAT);
    console.log(text);
  } catch (error) {
    console.error(error);
  }
}

(printVODS());