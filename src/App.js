import React, {useState, useRef} from 'react';
import './App.css'
import ColorBox from './Components/Box/index';
import TodoList from './Components/TodoList/index';
import TodoForm from './Components/TodoForm/index';

function App() {
	const [todoList, setTodoList] = useState([
		{id: 1, title: 'Son Minh Phu'},
		{id: 2, title: 'React Hook'},
		{id: 3, title: 'useState()'}
	]);

	const len = useRef(todoList.length + 1);

	function handleTodoClick(todo){
		const index = todoList.findIndex(x => x.id === todo.id);

		if(index < 0) return;

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	}

	function handleTodoFormSubmit(formVales){
		const newTodo = {
			id: len.current,
			...formVales
		}
		const newTodoList = [...todoList];
		newTodoList.push(newTodo);
		setTodoList(newTodoList);
		len.current ++;
	}

	return (
		<div className='app'>
			<h1>React hooks - TodoList</h1>
			<TodoForm onSubmit={handleTodoFormSubmit}/>
			<TodoList 
				todos={todoList}
				onTodoClick={handleTodoClick}/>
		</div>
	);
}

export default App;