require('dotenv').config()
const polka = require('polka');
const PORT = process.env.PORT;
const buildDoc = require('./buildDoc');

polka()
  .get('/build', (req, res) => {
    buildDoc();
    res.end('Je build ici');
  })
  .get('/', (req, res) => {
    res.end('serve');
  })
  .listen(PORT, err => {
    if(err) throw err;
    console.log(`Running: ${PORT}`)
  })