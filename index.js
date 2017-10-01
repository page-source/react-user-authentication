const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const path = require('path');
// connect to the database and load models
require('./server/models').connect(config.dbUri, {
  useMongoClient: true,
});

const app = express();

const PORT = process.env.PORT || 3001;

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', ' * ');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent questions
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);


// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(express.static(path.resolve(__dirname,'build')));
app.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './build', 'index.html'));
});
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3001 or http://127.0.0.1:3001');
});