require('dotenv').config();

const express = require('express');
const cors =  require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const app = express();
const routes = require( './routes');
const User = require('./models/User');

const config  = process.env;
const PORT = config.PORT;
const db = config.DB_URL;

mongoose.connect( db ,  (err) => {
	if(err){ console.log( `An unexpected error occured : ${ err }` ) };
	console.log( 'Connection establised')
});

app.use(bodyParser())
app.use(cors());

app.use( '/' , routes );


app.listen( PORT,  () => {
	console.log(`Application started on port 5000`);
})