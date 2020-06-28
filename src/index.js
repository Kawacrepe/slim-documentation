require('dotenv').config()
const { join } = require('path');
const polka = require('polka');
const send = require('@polka/send-type');
const PORT = process.env.PORT;
const serveDocumentation = require('./serveDocumentation');

const dir = join(__dirname, '../public');
const serve = require('serve-static')(dir);

polka()
  .use(serve)
  .get('/html', async (req, res) => {
    const data = (await serveDocumentation());
    send(res, 200, data);
  })
  .listen(PORT, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });