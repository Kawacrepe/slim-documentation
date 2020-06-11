require('dotenv').config()
const { join } = require('path');
const polka = require('polka');
const PORT = process.env.PORT;
const dir = join(__dirname, '../public');
const serve = require('serve-static')(dir);

const buildDoc = require('./buildDoc');

polka()
  .use(serve)
  .get('/build', (req, res) => {
    buildDoc();
    res.end('Je build ici');
  })
  .listen(PORT, err => {
    if(err) throw err;
    console.log(`Running: ${PORT}`)
  })