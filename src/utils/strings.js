const { VIDEO_TYPE_DEFAULT, VIDEO_TYPES } = require('../config');

/**
 * Limpia los caracteres especiales de un `string`.
 *
 * Ref: [Stack overflow](https://stackoverflow.com/a/37511463/2533051)
 *
 * Ref: [Carecteres diacriticos](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks)
 *
 * Ref: [`normalize()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize#syntax)
 * @param {string} str Un `string` cualquiera con caracteres especiales
 * @returns {string} Un `string` limpio
 */
function normalize (str) {
  return str
    .normalize('NFD') // Separa letras tildadas, ej: `â` -> `a` + `^`
    .replace(/\p{Diacritic}/gu, '') // Elimina caracteres diacríticos, ej: `^`
    .toLowerCase();
}

/**
 * Determina el tipo de un video dependiendo del titulo
 * @param {string} title El titulo de un sesion de la Convencion tal como viene desde la API de mediastream
 * @returns {string} Tipo de video de acuerdo al título
 */
function getType (title) {
  for (const type of VIDEO_TYPES) {
    if (normalize(title).includes(type)) { return type.replace(/\s/g, '_'); }
  }
  return VIDEO_TYPE_DEFAULT;
}

function has2Spaces (txt) { return txt.includes('  '); }

/**
 * Elimina algunos caracteres especificos del titulo de una sesion
 * @param {string} title El titulo de un sesion de la Convencion tal como viene desde la API de mediastream
 * @returns {string} Titulo limpio
 */
function cleanTitle (title) {
  let titleClean = normalize(title)
    .replace('convencion constitucional', '')
    .replace('2021', '')
    .replace('2022', '')
    .replace(/-/g, ' ')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .replace(/,/g, ' ');
  do {
    titleClean = titleClean.replace(/\s\s/g, ' ');
  } while (has2Spaces(titleClean));
  return titleClean.trim();
}

module.exports = {
  cleanTitle,
  getType
};
