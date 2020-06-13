const fs = require('fs');
const { join } = require('path');
const fileName = join(__dirname, '../public/index.html');
const stream = fs.createWriteStream(fileName);

function buildHtml(req) {
  const header = '';
  const body = 'test';

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};

module.exports = (res) => {

  const html = buildHtml();

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);

}