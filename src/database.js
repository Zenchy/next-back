const mongoose = require('mongoose')

const { MONGO_NAME, MONGO_HOST } = process.env
const MONGO_URI = `mongodb://${MONGO_HOST}/${MONGO_NAME}`

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(de=>console.log('We have database'))
.catch(err=>console.log(err))
