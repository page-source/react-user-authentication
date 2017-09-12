import React from 'react';
import { Link } from 'react-router-dom';
import Card, {CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          placeholder="Name"
          name="name"
          error={errors.name !== undefined}
          onChange={onChange}
          value={user.name}
          helperText={errors.name}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Email"
          name="email"
          error={errors.email !== undefined}
          onChange={onChange}
          value={user.email}
          helperText={errors.email}
        />
      </div>

      <div className="field-line">
        <TextField
          placeholder="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={errors.password !== undefined}
          value={user.password}
          helperText={errors.password}
        />
      </div>

      <div className="button-line">
        <Button raised type="submit" label="Create New Account" color='accent'>
        	Sign Up
        </Button>
      </div>

      <CardContent>Already have an account? <Link className="downLinks" to={'/login'}>Log in</Link></CardContent>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;