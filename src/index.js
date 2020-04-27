const app = require('./server')

app.listen(app.get('port'), () => console.log('HI WE ARE IN PORT:', app.get('port')))