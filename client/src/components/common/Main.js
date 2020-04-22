import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({...props}) => (
	<div className="container">
		<h1>Hello , { props.username } </h1>
		<br />
		<br />
		<div className=''><h4>What do you plan to do today?</h4></div>
		<div className='row'>
			<div className='text-center'>
				<Link to='/'>Explore</Link>
				<Link to='/'>Analyse</Link>
				<Link to='/'>Discuss</Link>
				<Link to='/'>Answer</Link>
			</div>
		</div>
	</div>
)

export default Main;