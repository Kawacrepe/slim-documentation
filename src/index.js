require('dotenv').config()
const polka = require('polka');
const PORT = process.env.PORT;
const serveDocumentation = require('./serveDocumentation');

polka()
  .get('/', async (req, res) => {
    await serveDocumentation(res);
  })
  .listen(PORT, err => {
    if(err) throw err;
    console.log(`Running: ${PORT}`)
  })