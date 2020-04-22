const express = require('express');
const router = express.Router();


router.use('/users' , require('./userRoute'));
router.use('/login' , require('./loginRoute'));

module.exports = router;
