import React from 'react';
import PropTypes from 'prop-types';


const Todo = props => <li>{props.object}<li/>
Todo.propsTypes = {
 	object: PropTypes.object.isRequired
}

export default Todo;