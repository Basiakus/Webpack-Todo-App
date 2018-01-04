import React from 'react';
import PropTypes from 'prop-types';


const TodoForm = props => 
	<form onSubmit={e => props.action(e)}>
		<input type="text" onChange={props.onChangeHandle}></input>
		<input type="submit" value="Submit"/>
	</form>

TodoForm.propsTypes = {
 	text: PropTypes.string.isRequired,
 	action: PropTypes.func.isRequired,
 	onChangeHandle: PropTypes.func.isRequired
}
export default TodoForm;