import InputTodo from './InputTodo';

export default function EditTodo() {
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
				<InputTodo />
			</div>
		</>
	);
}
