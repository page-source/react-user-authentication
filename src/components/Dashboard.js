import React from 'react';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import PropTypes from 'prop-types';

const Dashboard = ({ secretData }) => (
  <Card className="textCenter dashboard">
    <CardHeader title="Dashboard" subheader="You have sucessfully logged in!"></CardHeader>

    {secretData && <CardContent style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardContent>}
  </Card>
);

Dashboard.PropTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;