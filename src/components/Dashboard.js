import React from 'react';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import PropTypes from 'prop-types';

const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardHeader
      title="Dashboard"
      subheader="You should get access to this page only after authentication.">

    </CardHeader>

    {secretData && <CardContent style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardContent>}
  </Card>
);

Dashboard.PropTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;