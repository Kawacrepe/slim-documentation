require('dotenv').config()
const polka = require('polka');
const PORT = process.env.PORT;
const serveDocumentation = require('./serveDocumentation');

polka()
  .get('/', (req, res) => {
    serveDocumentation(res);
  })
  .listen(PORT, err => {
    if(err) throw err;
    console.log(`Running: ${PORT}`)
  })