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
  const navbar = manifest.find((el) => {
    if(el.hasOwnProperty('childrens')) {
      return el;
    }
  })
  
  html.push(`<ul class="navbar">${navbar.nav}</ul>`);
  for(const children of navbar.childrens) {
    html.push(`<li class="navbarItem">${children}</li>`);
  }

  for(const item of manifest) {
    // @todo remove this
    if(item.url) {
      html.push(await getHtmlMarkdown(item.url));
    }
  }
/*   console.log(html);
 */  return html;
}

module.exports = main;