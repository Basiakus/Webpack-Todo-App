import React from 'react';
import PropTypes from 'prop-types';


const Todo = props => <li onClick={props.del}>{props.text}</li>
Todo.propTypes = {
 	text: PropTypes.object.isRequired,
 	del: PropTypes.func.isRequired
}

export default Todo;