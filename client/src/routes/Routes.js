import React from 'react';
import Home from '../components/Home';
import { Link , Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';
import Users from '../components/Users';
import LoggedInUser from '../components/LoggedInUser';



const Routes = () => (
	<Router>
		<Route path='/' exact component={ Home } />
		<Route path='/home/:id' exact component={ LoggedInUser } />
		<Route path='/login' component={ Login } />
		<Route path='/register' component={ Register } />
		<Route path='/users' component={ Users } />
	</Router>
)

export default Routes;