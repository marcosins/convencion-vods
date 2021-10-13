const { SEPARATOR } = require('./config');

const CSV_HEADER = `FECHA${SEPARATOR}` +
  `TIPO${SEPARATOR}` +
  `TITULO${SEPARATOR}` +
  `DESCARGAR${SEPARATOR}` +
  `SITIO OFICIAL CONVENCION`;

function concat(fn) {
  return (prev, curr) => `${prev}\n${fn(curr)}`;
}

/**
 *
 * @param {Object} vod
 * @param {Date} vod.date
 * @param {string} vod.type
 * @param {string} vod.title
 * @param {string} vod.watch
 * @param {string} vod.download
 * @returns Datos de un video deparados por coma (`,`)
 */
function vodToCSV({ date, type, title, watch, download }) {
  return `${date.toISOString()}${SEPARATOR}` +
    `${type}${SEPARATOR}` +
    `${title}${SEPARATOR}` +
    `${download}${SEPARATOR}` +
    `${watch}`;
}

/**
 *
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns Lista de videos donde cada linea tiene datos separados por coma (`,`)
 */
function CSV(vods) {
  return vods.reduce(concat(vodToCSV), CSV_HEADER);
}

module.exports.CSV = CSV;