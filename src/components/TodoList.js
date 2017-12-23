
import React from 'react';
import PropTypes from 'prop-types';


const TodoList = props => <ul>{ props.list.map(oneThing => <li key={oneThing.id} onClick={props.action}>{oneThing.text}</li>) }</ul>
TodoList.propsTypes = {
 	list: PropTypes.object.isRequired,
 	action: PropTypes.func.isRequired
}
export default TodoList;