import { useState, useEffect } from 'react';
import { EditTodo } from '../components/EditTodo';
import { InputTodo } from '../components/InputTodo';
import { Link } from 'react-router-dom';
import { deleteTodo, getAllTodo } from '../api/request';

export const ListTodos = () => {
	const [todos, setTodos] = useState([]);
	const [openTodo, setOpenTodo] = useState(false);

	const loadTodo = async () => {
		try {
			getAllTodo()
				.then((response) => response.json())
				.then((data) => setTodos(data));
		} catch (error) {
			console.error(error.message);
		}
	};

	const deleteOneTodo = async (id) => {
		try {
			deleteTodo(id);
			setTodos(todos.filter((todo) => todo.todo_id !== id));
		} catch (error) {
			console.error(error.message);
		}
	};
	useEffect(() => {
		loadTodo();
	}, []);

	const modalControl = () => {
		setOpenTodo(!openTodo);
	};
	return (
		<>
			<div className="container text-center p-5">
				<InputTodo />
				<h1 className="pt-4">All tasks and descriptions</h1>
				{openTodo && <EditTodo openTodo={openTodo} setOpenTodo={setOpenTodo} />}
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
												Edit
											</button>
										</Link>
									</td>
									<td>
										<button className="btn btn-danger" onClick={() => deleteOneTodo(todo.todo_id)}>
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
