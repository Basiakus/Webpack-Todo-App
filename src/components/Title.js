import React from 'react';

class Title extends React.Component {
	
	render() {
	return (
		<h1>{this.props.text}</h1>
		);
	}
}



Title.propsTypes = {
 	title: React.PropTypes.string.isRequired
}


export default Title;