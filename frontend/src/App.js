import React from 'react';

import ToDoList from 'components/ToDoList';

import fetchTodos from 'api/fetchTodos';
import addTodo from 'api/addTodo'
import deleteTodo from 'api/deleteTodo'

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoList: [],
			inputValue: ""
		};

		this.handleAdd = this.handleAdd.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleStatusChange = this.handleStatusChange.bind(this)
	}

	componentDidMount() {
		fetchTodos()
			.then(todos => {
				this.setState({
					toDoList: todos
				})
			});
	}

	handleAdd() {
		let todo = {
			text: this.state.inputValue,
			isDone: false
		}

		addTodo(todo)
			.then(res => {
				let toDoList = this.state.toDoList.slice();
				let inputValue = this.state.inputValue;

				toDoList = toDoList.concat({
					pk: res.pk,
					text: inputValue,
					isDone: false
				})

				if (this.state.inputValue) {
					this.setState({
						toDoList: toDoList,
						inputValue: ""
					});
				}
			})
		
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleDelete(e) {
		e.stopPropagation();	
		let pk = parseInt(e.target.parentNode.getAttribute('pk'));
		const ind = parseInt(e.target.parentNode.getAttribute("ind"));
		let data = {
			pk: pk
		}

		deleteTodo(data)
			.then(() => {
				const toDoList = this.state.toDoList.slice();
				toDoList.splice(ind, 1);
				this.setState({
					toDoList: toDoList
				})
			})
		// const toDoList = this.state.toDoList.slice();
		// 	const ind = parseInt(e.target.parentNode.getAttribute("ind"));
		// toDoList.splice(ind, 1);
		// this.setState({
		// 	toDoList: toDoList
		// })
		
	}

	handleStatusChange(e) {
		const toDoList = this.state.toDoList.slice();
		const ind = parseInt(e.target.getAttribute("ind"));
		toDoList[ind].isDone = !toDoList[ind].isDone;

		this.setState({
			toDoList: toDoList
		})
	}
	
	render() {
		const toDoList = this.state.toDoList.slice()

		return (
			<div className="App">
				<h1>ToDo List</h1>
				<div className="App__form">
					<input type="text" placeholder="Type something here..." value={this.state.inputValue} onChange={this.handleInputChange}/>
					<input type="button" value="Add" onClick={this.handleAdd}/>
				</div>

				{
					toDoList.length ? 
					<ToDoList list={toDoList} handleDelete={this.handleDelete} handleStatusChange={this.handleStatusChange}/>
					:
					<div style={{ 
						fontSize: 20,
						marginTop:15
					}}>
						Do something, dude!
					</div>
				}
			</div>
		);
	}
}

export default App;
