
import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';
import Todo from '../components/Todo.js';
const TodoList = props => <ul className={style.List}>{props.list.map(oneThing => <Todo key={oneThing.id} onClick={() => props.action(oneThing.id)}>{object={oneThing.text}}</Todo>)} </ul>
TodoList.propsTypes = {
 	list: PropTypes.object.isRequired,
 	action: PropTypes.func.isRequired
}
export default TodoList;