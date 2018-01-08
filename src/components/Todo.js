import React from 'react';
import PropTypes from 'prop-types';


const Todo = props => <li onClick={props.del}>{props.mission}</li>
Todo.propTypes = {
 	mission: PropTypes.string.isRequired,
 	del: PropTypes.func.isRequired
}

export default Todo;