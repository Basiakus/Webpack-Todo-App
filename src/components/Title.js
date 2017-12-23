import React from 'react';
import PropTypes from 'prop-types';

const Title = props => <h1>{props.title}</h1>

Title.propsTypes = {
	title: PropTypes.string.isRequired
}

export default Title;