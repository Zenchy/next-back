const mongoose = require('mongoose')


const { MONGO_NAME, MONGO_HOST } = process.env
const MONGO_URI = `mongodb://${MONGO_HOST}/${MONGO_NAME}`

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db=>console.log(`WE ARE CONECTED TO: ${MONGO_NAME}`))
.catch(err=>console.log(err))