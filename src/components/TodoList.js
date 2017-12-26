
import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';
const TodoList = props => <ul className={style.List}>{props.list.map(oneThing => <li key={oneThing.id} onClick={() => props.action(oneThing.id)}>{oneThing.text}</li>)} </ul>
TodoList.propsTypes = {
 	list: PropTypes.object.isRequired,
 	action: PropTypes.func.isRequired
}
export default TodoList;