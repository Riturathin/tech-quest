import React from 'react';
import { Link } from 'react-router-dom';
import Header from  './common/Header';
import Main from './common/Main';

export default class LoggedInUser extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header username={this.props.match.params.id} />
				<Main username={this.props.match.params.id} />
			</div>
		);
	}
}
