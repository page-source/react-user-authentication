const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// tell the app to look for static files in these directories
//app.use(express.static('./server/static/'));
//app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

app.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});
// start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001 or http://127.0.0.1:3001');
});