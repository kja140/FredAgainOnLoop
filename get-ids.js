// get-ids.js
const { execSync } = require('child_process');

const PLAYLIST = 'PLKvU2jOxi2xD37YSmvlVZ76I7m5VVLASu';
const lines = execSync(`yt-dlp --flat-playlist -J "https://www.youtube.com/playlist?list=${PLAYLIST}"`)
  .toString();
const data = JSON.parse(lines);
const ids = data.entries.map(e => e.id);

console.log(JSON.stringify(ids, null, 2));
