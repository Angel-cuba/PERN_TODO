import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Fron side</h1>
				<InputTodo />
				<ListTodos />
			</div>
		</div>
	);
}

export default App;
