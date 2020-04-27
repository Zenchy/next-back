require('dotenv').config()
const app = require('./server')
require('./database')

app.listen(app.get('port'), () => console.log('HI WE ARE IN PORT:', app.get('port')))