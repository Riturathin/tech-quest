import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Users extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username:'',
			email: '',
			password:'',
			confirm_password:'',
			phone:'',
			about_yourself: '',
			address:'',
			isUserCreated: false
		}
	}

	handleCreateUserDataChange = (e) => {

		let name=e.target.name;
		let value = e.target.value;

		this.setState({
			[name]: value 
		});
	}
		

	handleCreateUserSubmit =(e) => {
		e.preventDefault();

		const payload = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state)
		}
		// console.log(JSON.stringify(this.state))
		fetch('http://localhost:5000/users' , payload )
			.then( response => response.json())
				.then( res => {
					console.log( "Result " + res.user_created )
					this.setState({
						isUserCreated: res.user_created 
					})
				})
	}

	render() {
		return (
			<div className='container'>
				<br />
				<br />
				<br />
				<br />

				<div className='col-xs-12 col-md-6 offset-md-3'>
					<h1>Create User</h1>
					<br />

					<hr />

					<br />

					<div className='user-create-form text-left'>
						<form className='form-group' onSubmit={ this.handleCreateUserSubmit }>
							<label htmlFor='username'>Enter Username</label>
							<input className='form-control'
											name='username'
											onChange={ this.handleCreateUserDataChange }
											required
											/>

							<br />

							<hr />

							<br />


							<label htmlFor='username'>Enter email</label>
							<input className='form-control'
											name='email'
											onChange={ this.handleCreateUserDataChange }
											required
											/>

							<br />

							<hr />

							<br />


							<label htmlFor='username'>Create Password</label>
							<input className='form-control'
											name='password'
											type='password'
											onChange={ this.handleCreateUserDataChange }
											required
											/>

							<br />

							<hr />

							<br />


							<label htmlFor='username'>Confirm Password</label>
							<input className='form-control'
											name='confirm_password'
											type='password'
											onChange={ this.handleCreateUserDataChange }
											required
											/>

							<br />

							<hr />

							<br />


							<label htmlFor='username'>Address</label>
							<textarea className='form-control'
											onChange={ this.handleCreateUserDataChange }
											type='textarea'
											name='address'
											/>

							<br />

							<hr />

							<br />

							<label htmlFor='username'>Phone No.</label>
							<input className='form-control'
											onChange={ this.handleCreateUserDataChange }
											name='phone'

											/>

							<br />

							<hr />

							<br />

							<label htmlFor='username'>About Yourself</label>
							<textarea className='form-control'
											onChange={ this.handleCreateUserDataChange }
											name='about_yourself'
											type='textarea'
											/>

							<br />

							<hr />

							<br />

							<button className='btn btn-success'>Create</button>


						</form>
						{this.state.isUserCreated && <Redirect push to={ `/home/${this.state.username}`} />}
					</div>
				</div>
				
			</div>
		);
	}
}
