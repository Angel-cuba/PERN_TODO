const router = require('express').Router();

const {
	getAllTodo,
	createTodo,
	updateTodo,
	getOneTodo,
	deleteTodo,
} = require('../controllers/controllers');

router.get('/allTodos', getAllTodo);
router.get('/oneTodo/:id', getOneTodo);
router.post('/createTodo', createTodo);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

module.exports = router;
