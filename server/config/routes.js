console.log('ROUTES FILE')
const taskController = require('../controllers/taskController.js');

module.exports = function (app) {
    app.get('/tasks', taskController.index);
    app.get('/tasks/:id', taskController.taskView);
    app.post('/tasks', taskController.postTask);
    app.put('/tasks/:id', taskController.editTask);
    app.delete('/tasks/:id', taskController.delete);
}