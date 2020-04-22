import React from 'react';

import { Link , Route } from 'react-router-dom';

class Home extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="container">
				<br />
				<br />
				<br />
				<br />
				<h1>TechQuest</h1>
				<div className='col-xs-12 col-md-6 offset-md-3'>
					<hr />
				</div>
				<br />
				<p>
					<i>An online forum to post technical questions where these will be reviewed, 
						discussed , analysed and answered</i>
				</p>

				<div className='col-xs-12 col-md-6 offset-md-3'>
					<div className='row'>	

						<div className='btn btn-primary col-xs-12 col-md-6'>
							<Link to='/login' style={{ color: '#fff'}}>
								Sign In
							</Link>
						</div>

						<div className='btn btn-secondary col-xs-12 col-md-6'>
							<Link to='/register' style={{ color: '#fff'}}>
								Sign Up
							</Link>
						</div>
					</div>
				</div>
		
			</div>
		);
	}
}

export default Home;
