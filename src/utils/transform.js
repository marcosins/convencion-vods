const { SEPARATOR, FORMAT_INDENT } = require('../config');

/**
 * Genera una lista de videos\
 * Cada linea contiene la informacion de 1 video
 * @param {function} 𝑓 Funcion que formatea la informacion de 1 video (Separado por `SEPARATOR`, Texto Plano, etc)
 * @returns {function} Funcion para usar en `Array.reduce`
 */
function generateList (𝑓) {
  return function (previous, current) { return `${previous}\n${𝑓(current)}`; };
}

/**
 * Transforma un objeto video en una linea CSV
 * @param {Object} vod
 * @param {Date} vod.date
 * @param {string} vod.type
 * @param {string} vod.title
 * @param {string} vod.watch
 * @param {string} vod.download
 * @returns Datos de un video deparados por coma (`,`)
 */
function vodToCSV (vod) {
  const { date, type, title, watch, download } = vod;
  return [
    `${date.toISOString()}`,
    `${type}`,
    `${title}`,
    `${download}`,
    `${watch}`
  ].join(SEPARATOR);
}

/**
 * Transforma un objeto video en un texto plano
 * @param {Object} vod
 * @param {Date} vod.date
 * @param {string} vod.type
 * @param {string} vod.title
 * @param {string} vod.watch
 * @param {string} vod.download
 * @returns Listado de videos
 */
function vodToTEXT (vod) {
  const { date, type, title, watch, download } = vod;
  const timeOptions = { dateStyle: 'full', timeZone: 'America/Santiago' };
  return [
    `TITULO: ${title}`,
    `SITIO OFICIAL: ${watch}`,
    `ENLACE DESCARGA: ${download}`,
    `TIPO: ${type}`,
    `DISPONIBLE DESDE: ${new Intl.DateTimeFormat('es-CL', timeOptions).format(date)}`
  ].join('\n').concat('\n');
}

/**
 * Transforma una lista de videos en formato CSV
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns {string} Lista de videos donde cada linea tiene datos separados por coma (`,`). Ver `SEPARATOR` en `config/index.js`
 */
function toCSV (vods) {
  const CSV_HEADER = [
    'FECHA',
    'TIPO',
    'TITULO',
    'DESCARGAR',
    'SITIO OFICIAL CONVENCION'
  ].join(SEPARATOR);
  return vods.reduce(generateList(vodToCSV), CSV_HEADER);
}

/**
 * Transforma una lista de videos en formato JSON
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns {string} JSON con identacion de 2 espacios
 */
function toJSON (vods) {
  return JSON.stringify(vods, undefined, FORMAT_INDENT);
}

/**
 * Transforma una lista de videos en texto plano
 * @param {[{date: Date, title: string, watch: string, download: string}]} vods
 * @returns {string} Informacion de los videos
 */
function toTEXT (vods) {
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
