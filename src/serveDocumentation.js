const fs = require('fs');
const { join } = require('path');
const marked = require('marked');

const docs = join(__dirname, '../docs');
const fileName = join(__dirname, '../public/index.html');

async function iteratorDoc(path) {
  const dir = await fs.promises.opendir(path);
  for await(const dirent of dir) {
    const currentFolder = join(`${path}/${dirent.name}`);

    const content = fs.readFileSync(currentFolder, 'utf8');
    console.log(marked(content));
    return marked(content);
  }
}

function buildHtml(req) {
  const header = '';

  // iterate over doc

  const body = iteratorDoc(docs);

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