const { default: axios } = require('axios');
const { DEFAULT_FORMAT, MEDIASTREAM_API_URL } = require('../config');
const { cleanTitle, getType } = require('./strings');
const to = require('./transform');

function getVideoInfo({ id, title, slug, date_created }) {
  const download = `https://mdstrm.com/video/${id}.mp4`;
  const watch = `https://convencion.tv/video/${slug}`;
  return {
    date: new Date(date_created),
    type: getType(title),
    title: cleanTitle(title),
    watch,
    download
  };
}

/**
 * Obtiene la información de las sesiones de la convencion constitucional usando la API de mediastream. Ver `MEDIASTREAM_API_URL` en `config/index.js`
 * @param {string} format Formatos: `CSV`, `JSON` y `TEXT`. Ver `DEFAULT_FORMAT` en `config/index.js`
 * @returns Información de las sesiones en el formato solicitado
 */
async function getVODS(format = DEFAULT_FORMAT) {
  const { data: { data } } = await axios.get(MEDIASTREAM_API_URL);
  const vods = data.map(getVideoInfo);

  switch (format) {
    case 'CSV':
      return to.CSV(vods);
    case 'JSON':
      return to.JSON(vods);
    default:
      return to.TEXT(vods);
  }
}

module.exports = {
  getVODS
};