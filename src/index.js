const { default: axios } = require('axios');
const to = require('./vods-transform');
const { removeRedundancy, getType } = require('./strings');
const { MEDIASTREAM_API_URL } = require('./config');

function getVideoInfo({ id, title, slug, date_created }) {
  const download = `https://mdstrm.com/video/${id}.mp4`;
  const watch = `https://convencion.tv/video/${slug}`;

  return {
    date: new Date(date_created),
    type: getType(title),
    title: removeRedundancy(title),
    watch,
    download
  };
}

async function parseVODS() {
  try {
    const { data: { data } } = await axios.get(MEDIASTREAM_API_URL);
    const vods = data.map(getVideoInfo);
    const text = to.CSV(vods);
    console.log(text);
    return;
  } catch (error) {
    console.error(error);
  }
}

(parseVODS());