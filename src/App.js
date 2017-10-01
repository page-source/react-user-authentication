import React from 'react';
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber,red, pink} from 'material-ui/colors'
import createPalette from 'material-ui/styles/createPalette'
import {
  BrowserRouter as Router, Route, Redirect
} from 'react-router-dom'
import Base from './components/Base';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
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
	  			<Route exact path="/" render={props => (
	            	Auth.isUserAuthenticated() ? (
	            		<Redirect to="/dashboard"/>
	            	) : (
					    <HomePage/>
					)
	        	)}/>
		        <Route exact path="/dashboard" render={props => 
		            <DashboardPage />
		        }/>
		         <Route exact path="/logout" render={props => 
		            <Logout />
		        }/>
		        <Route exact path="/signup" render={props => 
		            <SignUpPage url="/auth/signup"/>
		        }/>
		        <Route exact path="/login" render={props => 
		            <LoginPage url="/auth/login"/>
		        }/>
		       <FooterLinks/>
	  		</div>
	  	</Router>
  	</MuiThemeProvider>
);

export default App;
