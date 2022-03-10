export const getAllTodo = async () => await fetch('http://localhost:4000/allTodos');

export const getOneTodo = async (id) => await fetch(`http://localhost:4000/oneTodo/${id}`);

export const createTodo = async (body) =>
	await fetch('http://localhost:4000/createTodo', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	});

export const updateTodo = async (id, body) =>
	await fetch(`http://localhost:4000/updateTodo/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	});

export const deleteTodo = async (id) =>
	await fetch('http://localhost:4000/deleteTodo/' + id, { method: 'DELETE' });
