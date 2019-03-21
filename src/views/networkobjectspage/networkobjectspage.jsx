import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col,
    Input,
	Table,
} from 'reactstrap';

import NetworkAddForm from './networkaddform'
import VlanAddForm from './vlanaddform'
import UrlAddForm from './urladdform'

class NetworkObjectsPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        networkAddFormCollapse: false,
        vlanAddFormCollapse: false,
        urlAddFormCollapse: false,
      }
      this.toggleNetworkAddForm = this.toggleNetworkAddForm.bind(this)
      this.toggleVlanAddForm = this.toggleVlanAddForm.bind(this)
      this.toggleUrlAddForm = this.toggleUrlAddForm.bind(this)
    }
    toggleNetworkAddForm() {
      this.setState(state => ({ networkAddFormCollapse: !state.networkAddFormCollapse }))
    }
    toggleVlanAddForm() {
      this.setState(state => ({ vlanAddFormCollapse: !state.vlanAddFormCollapse }))
    }
    toggleUrlAddForm() {
      this.setState(state => ({ urlAddFormCollapse: !state.urlAddFormCollapse }))
    }
    render() {
        return (
            <div>
                <Row>
                  <Col sm="4">
                    <Card body>
                      <CardTitle>Networks</CardTitle>
                      <CardText>Network represent different phyical spaces</CardText>
                      <Button onClick={this.toggleNetworkAddForm} color="primary">
                        {this.state.networkAddFormCollapse?"Close":"Add New Network"}
                      </Button>
                      <NetworkAddForm collapse={this.state.networkAddFormCollapse}/>
                    </Card>
			              <Card>
			              	<CardBody>
			              		<CardTitle>Networks</CardTitle>
			              		<div className="feed-widget">
			              			<ul className="list-style-none feed-body-no-scroll m-0 pb-3">
			              				<li className="feed-item">
			              					<div className="feed-icon bg-info">
			              						<i className="ti-book"></i>
			              					</div>
			              					Class 9
			              					<span className="ml-auto mr-4 font-12 text-muted">
                              <Button className="btn" color="info" size="sm">Edit</Button>
			              					</span>
			              				</li>
			              			</ul>
			              		</div>
			              	</CardBody>
			              </Card>
                  </Col>
                  <Col sm="4">
                    <Card body>
                      <CardTitle>Virtual LANs</CardTitle>
                      <CardText>
                          Tags user traffic based on vlans
                      </CardText>
                      <Button onClick={this.toggleVlanAddForm} color="primary">
                        {this.state.vlanAddFormCollapse?"Close":"Add New VLAN"}
                      </Button>
                      <VlanAddForm collapse={this.state.vlanAddFormCollapse}/>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card body>
                      <CardTitle>URLs</CardTitle>
                      <CardText>
                          URLs can be used when creating rules
                      </CardText>
                      <Button onClick={this.toggleUrlAddForm} color="primary">
                        {this.state.urlAddFormCollapse?"Close":"Add New URL"}
                      </Button>
                      <UrlAddForm collapse={this.state.urlAddFormCollapse}/>
                    </Card>
                  </Col>
                </Row>
            </div>
        );

    }
}

export default NetworkObjectsPage;