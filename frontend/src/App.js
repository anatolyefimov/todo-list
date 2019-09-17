import React from 'react';

import ToDoList from 'components/ToDoList';

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
	}

	handleAdd() {
		if (this.state.inputValue) {
			this.setState(state => ({
				toDoList: state.toDoList.concat({text: state.inputValue}),
				inputValue: ""
			}));
		}
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}
	
	render() {
		const toDoList = this.state.toDoList.slice()

		return (
			<div className="App">
				<h1>ToDo List</h1>
				<form className="App__form">
					<input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
					<input type="button" value="Add" onClick={this.handleAdd}/>
				</form>

				{
					toDoList.length ? 
					<ToDoList list={toDoList}/>
					:
					"Do something, dude!"
				}
			</div>
		);
	}
}

export default App;
