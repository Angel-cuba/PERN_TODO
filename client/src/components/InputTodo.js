import React, { useState } from 'react';

export const InputTodo = ({ id }) => {
	const [description, setDescription] = useState('');
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			await fetch('http://localhost:4000/createTodo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<h1 className="text-center mt-5">{id ? 'Edit task' : 'Create task'}</h1>
			<form className="d-flex mt-5" onSubmit={onSubmitForm}>
				<input
					type="text"
					className="form-control"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button className="btn btn-success">{id ? 'Editing' : 'Create'}</button>
			</form>
		</>
	);
};
