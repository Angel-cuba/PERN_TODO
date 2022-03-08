const pool = require('../db/db');

const getAllTodo = async (req, res) => {
	try {
		const sql = 'SELECT * FROM todo';
		const all = await pool.query(sql);
		res.status(200).json(all.rows);
	} catch (error) {
		console.error(error.message);
	}
};

const getOneTodo = async (req, res) => {
	try {
		const { id } = req.params;

		const sql = 'SELECT * FROM todo WHERE todo_id= $1';
		const one = await pool.query(sql, [id]);
		res.status(200).json(one.rows);
	} catch (error) {
		console.error(error.message);
	}
};

const createTodo = async (req, res) => {
	try {
		const { description } = req.body;
		const sql = 'INSERT INTO todo (description) VALUES($1) RETURNING *';
		const newTodo = await pool.query(sql, [description]);
		res.status(200).send(newTodo);
	} catch (error) {
		console.error(error.message);
	}
};

const updateTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const sql = 'UPDATE todo SET description = $1 WHERE todo_id = $2';
		const updateTodo = await pool.query(sql, [description, id]);
		res.status(200).json('Todo updated');
	} catch (error) {
		console.error(error.message);
	}
};

const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const sql = 'DELETE FROM todo WHERE todo_id = $1';
		const deleteTodo = await pool.query(sql, [id]);
		res.status(200).json('Todo deleted');
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = {
	getAllTodo,
	createTodo,
	updateTodo,
	getOneTodo,
	deleteTodo,
};
