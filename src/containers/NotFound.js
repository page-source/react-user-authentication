import React from 'react';
import Card, {CardContent } from 'material-ui/Card';
const NotFound = () =>
	<Card>
		<CardContent>
			<div className="textCenter notFound">
				<h3>PAGE NOT FOUND!</h3>
				<p>We are sorry but the page you are looking for does not exist.</p>
				<img src="/assets/images/404.jpg" alt="content not found"/>
			</div>
		</CardContent>
	</Card>

export default NotFound;