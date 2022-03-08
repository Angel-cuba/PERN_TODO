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
	res.send('only one');
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
	res.send('updating');
};

const deleteTodo = async (req, res) => {
	res.send('delete');
};

module.exports = {
	getAllTodo,
	createTodo,
	updateTodo,
	getOneTodo,
	deleteTodo,
};
