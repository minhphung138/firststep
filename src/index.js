import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
//import {BrowserRouter as Router, Route} from 'react-router';
//import uuid from 'uuid'
import './index.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'


class Test extends React.Component {
	state = {
		todos: []
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(r => this.setState({todos: r.data}));
	}

	markComplete  = (id) => {
		this.setState({todo: this.state.todos.map(todo => {
			if(todo.id === id){
				todo.completed = !todo.completed
			}
			return todo;
			})
		});
	}

	delTodo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({todos: [...this.state.todos.filter(todo =>todo.id !== id)]}));
	}

	addTodo =(title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})
			.then(res => this.setState({ todos:
			[...this.state.todos, res.data]}));
		
	}
	render () {
		console.log(this.state.todos)
		return (
			<div className='index'>
				<div className="container">
					 <Header />
					 <AddTodo addTodo = {this.addTodo} />
					<Todos todos = {this.state.todos} 
					markComplete = {this.markComplete}
					delTodo = {this.delTodo}/> 
				</div>
			</div>
		);
	}
}


ReactDOM.render(<Test />, document.getElementById('root'));