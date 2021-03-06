import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from '../components/SignUpForm'
import {withRouter} from 'react-router-dom'
class SignUpPage extends React.Component {

  constructor(props,context) {
    super(props,context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      },
      isFetching:false
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event) {
    this.setState({
      isFetching:"loading"
    });
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    const name = this.state.user.name;
    const email = this.state.user.email;
    const password = this.state.user.password;
   // const formData = `name=${name}&email=${email}&password=${password}`;

    const formData =  { email        : email, 
                        name         : name,
                        password     : password
                      };
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
        this.setState({
          isFetching:false
        });
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
           // set a message
          localStorage.setItem('successMessage', res.message);

          // make a redirect
          this.props.history.push("/login");
        }
    })
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
        isFetching={this.state.isFetching}
      />
    );
  }
}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(SignUpPage);