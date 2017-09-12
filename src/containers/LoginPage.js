import React from 'react';
import LoginForm from '../components/LoginForm';
//import PropTypes from 'prop-types';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
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

    //console.log('email:', this.state.user.email);
    //console.log('password:', this.state.user.password);
     // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
    // create an AJAX request
    fetch(this.props.url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*'
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
          this.setState({
            errors: {}
          });
        }
      }
    )
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/auth/login');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     // success

    //     // change the component-container state
    //     this.setState({
    //       errors: {}
    //     });

    //     console.log('The form is valid');
    //   } else {
    //     // failure

    //     // change the component state
    //     const errors = xhr.response.errors ? xhr.response.errors : {};
    //     errors.summary = xhr.response.message;

    //     this.setState({
    //       errors
    //     });
    //   }
    // });
    // xhr.send(formData);
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
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;