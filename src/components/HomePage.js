import React from 'react';
import  Card,{CardHeader, CardContent}  from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
//import withStyles from 'material-ui/styles/withStyles';

const HomePage = (props) => (
  <Card className="container">
    <CardHeader title="React User Authentication" subheader="In & Out of User Authentication." />
    <CardContent>
    	<Typography>
    		<Button raised color="primary">Login </Button><br/><br/>
          	<Button raised color="primary">Signup</Button>
    	</Typography>
    </CardContent>

  </Card>
);

export default HomePage;
