const tasksCtrl = {}

tasksCtrl.renderTaskForm = (req,res) => {
  res.render('tasks/new-task')
}

tasksCtrl.createNewTask = (req, res) => {
console.log(req.body)
res.send('ihihihih')
}

tasksCtrl.renderTasks = (req, res) => res.send('All tasks')

tasksCtrl.renderEditTasks = (req, res) => res.send('Edited tasks')

tasksCtrl.renderUpdateTask = (req, res) => res.send('Updated tasks')

tasksCtrl.renderDeleteTask = (req, res) => res.send('Deleted tasks')


module.exports = tasksCtrl