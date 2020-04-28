require('dotenv').config()
const app = require('./server')
require('./database')


app.listen(app.get('port') || 5000, () => {
  console.log('Conected to port:', app.get('port'))
})