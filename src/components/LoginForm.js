import React from 'react';
import {Link} from 'react-router-dom';
import Card, {CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
		<div className="field-line">
			<TextField
				error={errors.email !== undefined}
				placeholder="Email"
				name="email"
				onChange={onChange}
				value={user.email}
				helperText={errors.email}
			/>
		</div>

		<div className="field-line">
			<TextField
				error={errors.password !== undefined}
				placeholder="Password"
				type="password"
				name="password"
				helperText={errors.password}
				onChange={onChange}
				value={user.password}
			/>
		</div>

      <div className="button-line">
        <Button raised type="submit" label="Log in" color="accent">
        	Log In
        </Button>
      </div>

      <CardContent>Don't have an account? <Link className="downLinks" to={'/signup'}>Create one</Link>.</CardContent>
    </form>
  </Card>
);

LoginForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;