import React from 'react'
import Auth from '../modules/Auth'
import LoginForm from '../components/LoginForm'
import {withRouter} from 'react-router-dom'
//import PropTypes from 'prop-types';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
     // create a string for an HTTP body message
    const email = this.state.user.email;
    const password = this.state.user.password;
    //const formData = `email=${email}&password=${password}`;
     const formData =  { email  : email, 
                        password: password
                      };
    // create an AJAX request
    fetch(this.props.url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(res =>  {
        if(res.success===false){
            const errors = res.errors ? res.errors : {};
            errors.summary = res.message;
            this.setState({
              errors
            });
        }else{
          Auth.authenticateUser(res.token);
          this.setState({
            errors: {}
          });
           // make a redirect
          this.props.history.push("/");
        }
      }
    )
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }

}

export default withRouter(LoginPage);