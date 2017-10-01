import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';
const FooterLinks = (props) => (
	<div className="footerLinks">
	 	 <Link target="_blank" className="col-md-6 floatNone" to="https://github.com/page-source/react-user-authentication">
			<Button className="homepageBtn" raised>Github</Button>
		</Link>
		<Link target="_blank"  className="col-md-6 floatNone" to="https://twitter.com/Page_Source">
			<Button className="homepageBtn" raised>Twitter</Button>
		</Link>
	</div>
);

export default FooterLinks;
