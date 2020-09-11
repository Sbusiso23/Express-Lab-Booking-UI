const express = require('express');

//dotenv
require('dotenv').config();

//express app
const app = express();

//port
const port = process.env.PORT || 5000;

//middleware
app.use('/', express.static('../public'));

//routes
//app.get('/login', loginRoute);

//listen
app.listen(port, () => console.log(`Server running on port ${port}`));