const { DEFAULT_VIDEO_TYPE } = require('../config');

function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase(); // https://stackoverflow.com/a/37511463/2533051
}

/**
 * Determina el tipo de un video dependiendo del titulo
 * @param {string} title
 * @returns {string} tipo de video de acuerdo al título
 */
function getType(title) {
  const types = [
    'subcomision',
    'comision',
    'pleno',
    'cuenta publica'
  ];
  for (const type of types) {
    if (normalize(title).includes(type))
      return type.replace(' ', '_');
  }
  return DEFAULT_VIDEO_TYPE;
}

function has2Spaces(txt) { return txt.includes('  '); }

function cleanTitle(title) {
  let clean = normalize(title);
  clean = clean.replace('convencion constitucional', '');
  clean = clean.replace('2021', '');
  clean = clean.replace('2022', '');
  clean = clean.replace(/-/g, ' ');
  clean = clean.replace(/\"/g, '');
  clean = clean.replace(/\'/g, '');
  clean = clean.replace(/\,/g, ' ');
  do {
    clean = clean.replace(/\s\s/g, ' ');
  } while (has2Spaces(clean));
  return clean.trim();
}

module.exports = {
  cleanTitle,
  getType
};