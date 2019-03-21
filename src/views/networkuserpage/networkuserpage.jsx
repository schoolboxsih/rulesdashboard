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

import img1 from '../../assets/images/users/2.jpg';
import AddForm from './adduserform.jsx'
import groupnames from '../../radiusgroups.json'

class NetworkUserPage extends React.Component {
    constructor(props) {
      super(props)
      this.toggleAddForm = this.toggleAddForm.bind(this)
      this.state = { addFormCollapse: false }
    }

    toggleAddForm() {
      this.setState(state => ({ addFormCollapse: !state.addFormCollapse }))
    }
 
    render() {
        return (
            <div>
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Add Users</CardTitle>
                        <Row>
                            <Col sm="8">
                                <CardText>
                                      Add network users. You can add teachers and students by class here.
                                </CardText>
                            </Col>
                            <Col>
                                <Button
                                    ml="1"
                                    onClick={this.toggleAddForm}
                                    color="primary">
                                    {this.state.addFormCollapse?"Close Form":"Add New User"}
                                    </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <AddForm collapse={this.state.addFormCollapse}/>
                            </Col>
                        </Row>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <CardHeader>
                          <Row>
                              <Col sm="8"> All Users </Col>
                              <Col>
                              <div className="ml-auto d-flex no-block align-items-center">
                                <div className="dl">
                                <Input type="select" className="custom-select">
                                {groupnames.map(g=>(
                                    <option key={g.groupname} value={g.groupname}>{g.name}</option>
                                ))}
                                </Input>
                                </div>                                                                                                                                                              
                              </div>
                              </Col>
                          </Row>
                      </CardHeader>
                      <CardBody>
					<Table className="no-wrap v-middle" responsive>
						<thead>
							<tr className="border-0">
								<th className="border-0">User</th>
								<th className="border-0">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Elite Admin</td>
								<td className="blue-grey-text  text-darken-4 font-medium">Modify</td>
							</tr>
						</tbody>
					</Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </div>
        );

    }
}

export default NetworkUserPage;