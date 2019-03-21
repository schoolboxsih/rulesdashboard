import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';

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
                          This is an advanced firewall, use existing vlans,networks,urls objects.
                      </CardText>
                      <Button color="primary">Add New Rule</Button>
                    </Card>
			<Card>
				<CardBody>
					<CardTitle>FMC Rules</CardTitle>
					<div className="feed-widget">
						<ul className="list-style-none feed-body m-0 pb-3">
							<li className="feed-item">
								<div className="feed-icon bg-success">
									<i className="ti-book"></i>
								</div>
								Teachers
								<span className="ml-auto mr-4 font-12 text-muted">
                          			<Button className="btn" color="primary" size="sm">View</Button>
                          			<Button className="btn" color="danger" size="sm">Disable</Button>
                          			<Button className="btn" color="success" size="sm">Enable</Button>
								</span>
							</li>
						</ul>
					</div>
				</CardBody>
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