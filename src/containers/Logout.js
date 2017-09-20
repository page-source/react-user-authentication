import React from 'react';
import Auth from '../modules/Auth';
import Logout from '../components/Logout';
import {withRouter} from 'react-router-dom'

class LogoutPage extends React.Component {

  componentDidMount(){
  	Auth.deauthenticateUser();
  	this.props.history.push("/logout");
  }
  render() {
    return (<Logout />);
  }

}

export default withRouter(LogoutPage);