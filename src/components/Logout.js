import React from 'react';
import Card, {CardHeader,CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

const Logout = () => (
  <Card className="container">
    <CardHeader
      title="Logged Out!"
      subheader="You have been logged out of this application.">
    </CardHeader>

   <CardContent>
    	<Typography>
  			<Link to={"/login"}><Button className="homepageBtn" raised color="primary">Login Again</Button></Link>
    		<br/><br/>
      	
    	</Typography>
    </CardContent>  
  </Card>
);


export default Logout;