/** Separador por defecto: `,` */
module.exports.SEPARATOR = ',';
/** Tipo de video por defecto cuando no coincide con alguno presente en `VIDEO_TYPES` */
module.exports.VIDEO_TYPE_DEFAULT = 'otro';
/** Tipos de video posibles para cada sesion */
module.exports.VIDEO_TYPES = [
  'clip',
  'comision',
  'convencion al dia',
  'cuenta publica',
  'pleno',
  'subcomision'
];
/** Autoexplicativo. Trae todos los videos de la convencion */
module.exports.MEDIASTREAM_API_URL = 'https://convencion.tv/api/media?limit=0';
/** Tipo de salida por defecto al correr `npm run print` */
module.exports.DEFAULT_FORMAT = 'text';
/** Identacion por defecto al correr `npm run print json */
module.exports.FORMAT_INDENT = 2;
