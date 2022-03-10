import React, { useState } from 'react';
import { createTodo, updateTodo } from '../api/request';

export const InputTodo = ({ id, valueDescription }) => {
	console.log(valueDescription);
	const [description, setDescription] = useState('');
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			if (id) {
				updateTodo(id, body);
				window.location.reload();
			} else {
				createTodo(body);
				window.location.reload();
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleTodo = (e) => {
		setDescription(e.target.value);
	};

	return (
		<>
			<h1 className="text-center mt-5">{id ? 'Edit task' : 'Create task'}</h1>
			<form className="d-flex mt-5" onSubmit={onSubmitForm}>
				<input
					type="text"
					className="form-control"
					id="description"
					placeholder={id ? valueDescription : description}
					value={description}
					onChange={(e) => handleTodo(e)}
				/>
				<button className="btn btn-success">{id ? 'Editing' : 'Create'}</button>
			</form>
		</>
	);
};
