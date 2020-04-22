const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/:id' , (req, res, err) => {

	User.findById(req.params.id, (err, user) => {
      if(err) throw err;
      else res.send( user );
   });

})


router.post('/' ,  (req, res, err ) => {
	 var user = new User({
	 		username : req.body.username,
	 		email: req.body.email,
	 		password: req.body.password,
	 		confirm_password: req.body.confirm_password,
	 		about: req.body.about,
	 		phone: req.body.phone,
	 		address: req.body.address
	 		
	 });
	 user.save()
	 .then(item => {
	 		res.json({ user_created : true });
	 })
	 .catch(err => {
	 		res.status(400).send("unable to save to database");
	 });

})


module.exports = router;