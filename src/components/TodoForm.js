import React from 'react';
import PropTypes from 'prop-types';


const TodoForm = props => 
	<form onSubmit={() => props.action(props.text)}>
		<input type="text" value={props.text}></input>
		<input type="submit" value="Submit"/>
	</form>

TodoForm.propsTypes = {
 	text: PropTypes.string.isRequired,
 	action: PropTypes.func.isRequired
}
export default TodoForm;