const { Router } = require('express')
const router = Router()

const {
  renderTaskForm,
  createNewTask,
  renderTasks,
  renderEditTasks,
  renderUpdateTask,
  renderDeleteTask
} = require('../controllers/tasks.controller')

//New task
router.get('/tasks/add', renderTaskForm)

router.post('tasks/add', createNewTask)

//Get all tasks

router.get('/tasks', renderTasks)

//Edit tasks

router.get('/tasks/edit/:id', renderEditTasks)

router.put('/tasks/edit/:id', renderUpdateTask)

//Delete tasks

router.delete('/tasks/delete/:id', renderDeleteTask)


module.exports = router
