const fs = require('fs');
const path = require('path');

module.exports = function () {
  const appsDir = path.resolve(path.join(__dirname, '../src/apps'));
  return fs
    .readdirSync(appsDir, { withFileTypes: true })
    .filter((dirEntry) => dirEntry.isDirectory())
    .map((dirEntry) => dirEntry.name);
};
