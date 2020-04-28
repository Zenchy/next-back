const tasksCtrl = {}

tasksCtrl.renderTaskForm = (req,res) => res.send('Task added')

tasksCtrl.createNewTask = (req, res) => res.send('New task created')

tasksCtrl.renderTasks = (req, res) => res.send('All tasks')

tasksCtrl.renderEditTasks = (req, res) => res.send('Edited tasks')

tasksCtrl.renderUpdateTask = (req, res) => res.send('Updated tasks')

tasksCtrl.renderDeleteTask = (req, res) => res.send('Deleted tasks')


module.exports = tasksCtrl