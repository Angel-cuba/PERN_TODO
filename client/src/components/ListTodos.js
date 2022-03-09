import { useState, useEffect } from 'react';

export default function ListTodos() {
	const [todos, setTodos] = useState([]);

	const getAllTodo = async () => {
		try {
			const response = await fetch('http://localhost:4000/allTodos');
			const jsonData = await response.json();
			setTodos(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			await fetch('http://localhost:4000/deleteTodo/' + id, { method: 'DELETE' });
		} catch (error) {
			console.error(error.message);
		}
	};
	useEffect(() => {
		getAllTodo();
	}, [todos]);
	return (
		<>
			<h1>All tasks and descriptions</h1>
			<table className="table mt-6 text-center">
				<thead>
					<tr>
						<th>Id</th>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>{todo.todo_id}</td>
							<td>{todo.description}</td>
							<td>
								<button className="btn btn-outline-success">Edit</button>
							</td>
							<td>
								<button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
