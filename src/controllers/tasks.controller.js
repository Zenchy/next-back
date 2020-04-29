const tasksCtrl = {}
const Task = require('../models/Task')

tasksCtrl.renderTaskForm = (req,res) => {
  res.render('tasks/new-task')
}

tasksCtrl.createNewTask = async(req, res) => {
const { title, description } = req.body
const newTask = new Task({title, description})
console.log(newTask)
await newTask.save()
res.send('newTask')
}

tasksCtrl.renderTasks = async (req, res) => {
  const tasks = await Task.find()
  res.render('tasks/all-tasks', {tasks})
}

tasksCtrl.renderEditTasks = (req, res) => res.send('Edited tasks')

tasksCtrl.renderUpdateTask = (req, res) => res.send('Updated tasks')

tasksCtrl.renderDeleteTask = (req, res) => res.send('Deleted tasks')

module.exports = tasksCtrl