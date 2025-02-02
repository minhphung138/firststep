import React from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '5px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed? 'line-through' : 'none'
		}
	}
	render() {
		const {id, title } = this.props.todo;
		return (
			<div style ={this.getStyle()}>
				<p> 
					<input type="checkbox" onChange={this.props.markComplete.bind
						(this, id)} /> {' '}
					{title}
					<button onClick = {this.props.delTodo.bind(this, id) }
							style= {btnStyle}>x</button> 
				</p>
			</div>
		)
	}
}
TodoItem.propsTypes = {
	todo: PropTypes.object.isRequired
}


const btnStyle = {
	background: '#ff0000',
	color: 'red',
	border: 'none',
	padding: '5px',
	borderRadius: '5px',
	float: 'right'

}
TodoItem.propsTypes = {
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}




export default TodoItem