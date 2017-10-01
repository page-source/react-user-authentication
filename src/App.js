import React from 'react';
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber,red, pink} from 'material-ui/colors'
import createPalette from 'material-ui/styles/createPalette'
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom'
import Base from './components/Base';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import NotFound from './containers/NotFound';
import FooterLinks from './components/FooterLinks';
import DashboardPage from './containers/DashboardPage';
import Logout from './containers/Logout';
import Auth from './modules/Auth';
const muiTheme = createMuiTheme({
    palette: createPalette({
      primary: pink,
      accent: amber,
      error: red,
      type: 'light',
      contrast: red
    })
});
const App = () =>(
	<MuiThemeProvider theme={muiTheme}>
	    <Router>
	  		<div>
	  			<Base color="accent"/>
	  			<Switch>
		  			<Route exact path="/" render={props => (
		            	Auth.isUserAuthenticated() ? (
		            		<Redirect to="/dashboard"/>
		            	) : (
						    <HomePage/>
						)
		        	)}/>
			        <Route exact path="/dashboard" render={props =>(
			        	Auth.isUserAuthenticated() ? (
		            		<DashboardPage />
		            	) : (
						    <Redirect to="/login"/>
						)
			        )}/>
			        <Route exact path="/logout" render={props => (
			         	Auth.isUserAuthenticated() ? (
		            		<Redirect to="/dashboard"/>
		            	) : (
						    <Logout />
						)
			        )}/>
			        <Route exact path="/signup" render={props => (
			        	Auth.isUserAuthenticated() ? (
		            		<Redirect to="/dashboard"/>
		            	) : (
						    <SignUpPage url="/auth/signup"/>
						)
			        )}/>
			        <Route exact path="/login" render={props => (
			        	Auth.isUserAuthenticated() ? (
		            		<Redirect to="/dashboard"/>
		            	) : (
						    <LoginPage url="/auth/login"/>
						)
			        )}/>
			        <Route path="*" status={404} component={NotFound} />
		        </Switch>
		       <FooterLinks/>
	  		</div>
	  	</Router>
  	</MuiThemeProvider>
);

export default App;
