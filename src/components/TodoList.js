
import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';
import Todo from '../components/Todo.js';
const TodoList = props => 
	<ul className={style.List}>
		{props.list.map(oneThing => <Todo key={oneThing.id} del={() => props.action(oneThing.id)} text={oneThing.text} />)} 
	</ul>
TodoList.propTypes = {
 	list: PropTypes.object.isRequired,
 	action: PropTypes.func.isRequired
}
export default TodoList;