import React from 'react';
import  Card,{CardHeader, CardContent}  from 'material-ui/Card';
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const HomePage = (props) => (
  <Card className="container">
    <CardHeader title="React User Authentication" subheader="In & Out of User Authentication." />
    <CardContent>
    	<Typography>
  			<Link to={"/login"}><Button className="homepageBtn" raised color="primary">Login</Button></Link>
    		<br/><br/>
    		<Link to={"/signup"}><Button className="homepageBtn" raised color="primary">Signup</Button></Link>          	
    	</Typography>
    </CardContent>

  </Card>
);

export default HomePage;
