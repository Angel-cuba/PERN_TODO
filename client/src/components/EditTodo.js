import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InputTodo } from './InputTodo';

export const EditTodo = ({ openTodo, setOpenTodo }) => {
	const [valueDescription, setValueDescription] = useState('');
	const { id } = useParams();
	console.log('editTodo: ' + valueDescription);

	const getOneTodo = async (id) => {
		await fetch(`http://localhost:4000/oneTodo/${id}`)
			.then((response) => response.json())
			.then((data) => setValueDescription(data[0].description));
	};
	useEffect(() => {
		if (id) {
			getOneTodo(id);
		}
	}, []);

	const close = () => {
		console.log('click');
		setOpenTodo(!openTodo);
	};
	return (
		<>
			<div
				style={{
					width: '400px',
					height: '300px',
					position: 'absolute',
					top: '0',
					left: '25%',
					border: '1px solid silver',
					backgroundColor: 'rgba(255,255, 255, 0.341)',
					backdropFilter: 'blur(6px)',
					boxShadow: '0 0 20px rgba(0,0,0,0.2)',
					borderRadius: '7px',
				}}
			>
				<InputTodo id={id} valueDescription={valueDescription} />
				{id && (
					<button onClick={() => close()} className="btn btn-danger">
						X
					</button>
				)}
			</div>
		</>
	);
};
