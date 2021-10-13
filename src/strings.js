const { DEFAULT_TYPE } = require('./config');

function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase(); // https://stackoverflow.com/a/37511463/2533051
}

/**
 *
 * @param {string} title
 * @returns tipo de video según de acuerdo al título
 */
function getType(title) {

  const types = [
    'subcomision',
    'comision',
    'pleno',
    'cuenta publica'
  ];
  for (const type of types) {
    if (normalize(title).includes(type)) return type;
  }
  return DEFAULT_TYPE;
}

function removeRedundancy(title) {
  let clean = normalize(title);
  clean = clean.replace('convencion constitucional', '');
  clean = clean.replace('2021', '');
  clean = clean.replace('2022', '');
  clean = clean.replace(/-/g, ' ');
  do {
    clean = clean.replace(/\s\s/g, ' ');
  } while (clean.includes('  '));
  return clean.trim();
}

module.exports = {
  removeRedundancy,
  getType
};