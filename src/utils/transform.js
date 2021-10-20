const { SEPARATOR, FORMAT_INDENT } = require('../config');

/**
 * Genera una lista de videos\
 * Cada linea contiene la informacion de 1 video
 * @param {function} 𝑓 Funcion que formatea la informacion de 1 video (Separado por `SEPARATOR`, Texto Plano, etc)
 * @returns {function} Funcion para usar en `Array.reduce`
 */
function generateList(𝑓) {
  return function (previous, current) { return `${previous}\n${𝑓(current)}`; };
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
 * @param {Object} vod
 * @param {Date} vod.date
 * @param {string} vod.type
 * @param {string} vod.title
 * @param {string} vod.watch
 * @param {string} vod.download
 * @returns Listado de videos
 */
function vodToTEXT({ date, type, title, watch, download }) {
  const timeOptions = { dateStyle: 'full', timeZone: 'America/Santiago' };
  return `TITULO: ${title}\n` +
    `SITIO OFICIAL: ${watch}\n` +
    `ENLACE DESCARGA: ${download}\n` +
    `TIPO: ${type}\n` +
    `DISPONIBLE DESDE: ${new Intl.DateTimeFormat('es-CL', timeOptions).format(date)}\n`;
}

/**
 *
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns Lista de videos donde cada linea tiene datos separados por punto y coma (`;`). Ver `SEPARATOR` en `config/index.js`
 */
function toCSV(vods) {
  const CSV_HEADER = `FECHA${SEPARATOR}` +
    `TIPO${SEPARATOR}` +
    `TITULO${SEPARATOR}` +
    `DESCARGAR${SEPARATOR}` +
    `SITIO OFICIAL CONVENCION`;
  return vods.reduce(generateList(vodToCSV), CSV_HEADER);
}

/**
 *
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns JSON con identacion de 2 espacios
 */
function toJSON(vods) {
  return JSON.stringify(vods, undefined, FORMAT_INDENT);
}

/**
 *
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns Informacion de los videos
 */
function toTEXT(vods) {
  return vods.reduce(generateList(vodToTEXT), '');
}

/**
 * Transforma el resultado de Mediastream en información útil en el formato seleccionado
 */
module.exports = {
  CSV: toCSV,
  JSON: toJSON,
  TEXT: toTEXT
};