import React from 'react';
import { Text } from 'react-native';

export class HelloView extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		return (<Text>Hello, {this.props.userName}</Text>)
	}
}

HelloView.propTypes = {
  userName: React.PropTypes.string
}

HelloView.defaultProps = {
  userName: 'name'
}