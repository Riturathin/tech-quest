const User =  require('../models/User');
const router = require('express').Router();


router.post( '/' , ( req, res , err ) => {
	User.find({ email : { $eq : req.body.email }}, (err, user_data) => {
		if(err) return res.send( err )
		if( user_data[0].password === req.body.password ) {
			res.json({ 
				message: 'success',
				user: user_data[0]
			})
		}
		else{
			console.log( "The code is here ")
			res.json({
				message: 'Failed to authenticate user. Wrong username or password'
			})
		}
	})
});


module.exports = router