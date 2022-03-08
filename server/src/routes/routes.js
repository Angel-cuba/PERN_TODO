const router = require('express').Router();

const {
	getAllTodo,
	createTodo,
	updateTodo,
	getOneTodo,
	deleteTodo,
} = require('../controllers/controllers');

router.get('/allTodos', getAllTodo);
router.get('/oneTodo', getOneTodo);
router.post('/createTodo', createTodo);
router.put('/updateTodo', updateTodo);
router.delete('/deleteTodo', deleteTodo);

module.exports = router;
