import React from 'react';

import ToDoList from 'components/ToDoList';
import fetchTodos from 'api/fetchTodos';

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
		if (this.state.inputValue) {
			this.setState(state => ({
				toDoList: state.toDoList.concat({
					text: state.inputValue,
					isDone: false
				}),
				inputValue: ""
			}));
		}
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleDelete(e) {
		const toDoList = this.state.toDoList.slice();
		const ind = parseInt(e.target.parentNode.getAttribute("id"));
		toDoList.splice(ind, 1);
		this.setState({
			toDoList: toDoList
		})
		e.stopPropagation()
	}

	handleStatusChange(e) {
		const toDoList = this.state.toDoList.slice();
		const ind = parseInt(e.target.getAttribute("id"));
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
				<form className="App__form">
					<input type="text" placeholder="Type something here..." value={this.state.inputValue} onChange={this.handleInputChange}/>
					<input type="button" value="Add" onClick={this.handleAdd}/>
				</form>

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
