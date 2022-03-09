import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ListTodos } from './components/ListTodos';

function App() {
	return (
		<Routes>
			<Route path="" element={<ListTodos />} />
			<Route path="/:id" element={<ListTodos />} />
		</Routes>
	);
}

export default App;
