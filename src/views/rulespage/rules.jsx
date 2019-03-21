import React from 'react';
import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { NetworkUsage,
         Classes,
       } from '../../components/dashboard-components';

class RulesPage extends React.Component {
    render() {
        return (
            <div>
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>FMC rules</CardTitle>
                      <CardText>
                          Cisco Firepower rules, use this when you've to change rules globally.
                          This is an advanced firewall, you need to use existing vlans,networks,urls
                          objects.
                      </CardText>
                      <Button color="primary">Add New Rule</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>iptables rules</CardTitle>
                      <CardText>
                          Linux iptables rules, use this when you've to change rules locally or for
                          specific user. This uses less effective blocking by mac filtering.
                      </CardText>
                      <Button color="primary">Add New Rule</Button>
                    </Card>
                  </Col>
                </Row>
            </div>
        );

    }
}

export default RulesPage;