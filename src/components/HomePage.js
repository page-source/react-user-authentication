import React from 'react';
import  Card,{CardHeader, CardContent}  from 'material-ui/Card';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';
//import Typography from 'material-ui/Typography';
const HomePage = (props) => (
  <Card className="homePage">
    <CardHeader title="React User Authentication" className="textCenter" subheader="Signup or login below to get started." />
   
    <CardContent className="homeButtons">
  			<Link className="col-md-6 floatNone" to={"/login"}><Button className="homepageBtn" raised color="primary">Login</Button></Link>
    		<Link className="col-md-6 floatNone" to={"/signup"}><Button className="homepageBtn" raised color="primary">Signup</Button></Link>
    </CardContent>
  </Card>
);

export default HomePage;
