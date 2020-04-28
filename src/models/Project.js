const { Schema, model } = require('mongoose')

const ProjectSchema = new Schema({
  name: { type: String, required: String},
  description: { type: String, required: String},
}, {
  timestamps: true
})

module.exports = model('Project', ProjectSchema)