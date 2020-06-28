const { get } = require('httpie');
const MarkdownIt = require('markdown-it');
const manifest = require('../manifest.json');

const md = new MarkdownIt();

async function getHtmlMarkdown(url) {
  const { data } = await get(url);
  let result = md.render(data);
  return result;
}

async function main() {
  const html = [];
  for(const item of manifest) {
    html.push(await getHtmlMarkdown(item.url));
  }
  return html;
}

module.exports = main;