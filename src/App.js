import React from 'react';
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber, red, pink} from 'material-ui/colors'
import createPalette from 'material-ui/styles/createPalette'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import Base from './components/Base';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import DashboardPage from './containers/DashboardPage';
import Logout from './containers/Logout';

const muiTheme = createMuiTheme({
    palette: createPalette({
      primary: pink,
      accent: amber,
      error: red,
      type: 'light'
    })
});

const App = () =>(
	<MuiThemeProvider theme={muiTheme}>
	    <Router>
	  		<div>
	  			<Base color="accent"/>
	  			<Route exact path="/" render={props => 
	            	<HomePage {...props} />
	        	}/>
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
	  		</div>
	  	</Router>
  	</MuiThemeProvider>
);

export default App;
