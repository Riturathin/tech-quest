import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			message: ''
		}
	}

	handleLoginUserDataChange = ( e ) => {
		let name = e.target.name;
		let val = e.target.value
		this.setState({
			[name ]: val
		});
	}

	handleLoginUserSubmit=(e) => {
		e.preventDefault()
		const payload = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state)
		}

		fetch(`http://localhost:5000/login` , payload )
			.then( response => response.json())
				.then( res => {
					console.log( JSON.stringify(res.user) )
					if( res.message === 'success') {
						this.setState({
							message: res.message,
							username: res.user.username
						});
					}
					else {
						this.setState({
							message: res.message 
						});
					}
					
				})
	}

	render() {
		return (
			<div className='container'>
				<br />
				<br />
				<br />
				<br />
				<h1>Login</h1>


				<div className='user-create-form text-left col-xs-12 col-md-6 offset-md-3'>
					<br/>

					<hr />

					<br /> 
						<form className='form-group' onSubmit={ this.handleLoginUserSubmit }>
							<label htmlFor='email'>Enter Email</label>
							<input className='form-control'
											name='email'
											onChange={ this.handleLoginUserDataChange }
											required
											/>

							<br />

							<hr />

							<br />


							<label htmlFor='password'>Enter Password</label>
							<input className='form-control'
											name='password'
											onChange={ this.handleLoginUserDataChange }
											required
											type='password'
											/>

							<br />

							<hr />

							<br />
							<button className='btn btn-primary' type='submit'>Login</button>
						</form>
						{ this.state.message === 'success' ? 
								<Redirect push to={ `/home/${this.state.username}`} /> :
								this.state.message !== '' && <p className='alert alert-danger'>{ this.state.message }</p> 
						}
					</div>

			</div>
		);
	}
}
