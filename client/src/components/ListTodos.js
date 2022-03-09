import { useState, useEffect } from 'react';
import { EditTodo } from '../components/EditTodo';
import { InputTodo } from '../components/InputTodo';
import { Link } from 'react-router-dom';

export const ListTodos = () => {
	const [todos, setTodos] = useState([]);
	const [openTodo, setOpenTodo] = useState(false);

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
	}, []);

	const modalControl = () => {
		setOpenTodo(!openTodo);
	};
	return (
		<>
			<div className="container">
				<InputTodo />
				<h1>All tasks and descriptions</h1>
				{openTodo && <EditTodo />}
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
						{!todos.length ? (
							<tr>
								<td>Loading...</td>
								<td>Loading...</td>
								<td>Loading...</td>
								<td>Loading...</td>
							</tr>
						) : (
							todos.map((todo, index) => (
								<tr key={index}>
									<td>{todo.todo_id}</td>
									<td>{todo.description}</td>
									<td>
										<Link to={`/${todo.todo_id}`}>
											<button className="btn btn-success" onClick={() => modalControl()}>
												{openTodo ? 'Close editing' : 'Edit'}
											</button>
										</Link>
									</td>
									<td>
										<button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
											Delete
										</button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};
