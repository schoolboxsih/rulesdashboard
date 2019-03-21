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
import ModifyUserForm from './modifyuserform'
import InfoUser from './infouser'
import groupnames from '../../radiusgroups.json'

class UserItem extends React.Component {
    constructor(props) {
      super(props)
      this.modifyForm = this.modifyForm.bind(this)
      this.showInfo = this.showInfo.bind(this)
      this.state = {}
    }
    modifyForm() {
      this.props.setSelectedUserAction(true)
      this.props.setSelectedUser(this.props.user)
    }
    showInfo() {
      this.props.setSelectedUserAction(false)
      this.props.setSelectedUser(this.props.user)
    }
    render() {
        let user = this.props.user
        return (
	     <tr>
	     	<td>
	     	<h5 className="mb-0 font-16 font-medium">{user.name}</h5>
               <span>{user.username}</span>
            </td>
	     	<td>
               <Button 
               onClick={this.modifyForm}
               className="btn" 
               color="primary" size="sm">Modify</Button>
            </td>
	     	<td>
               <Button 
               onClick={this.showInfo}
               className="btn"
               color="secondary" size="sm">Show Info</Button>
            </td>
	     </tr>
        )
    }
}

class NetworkUserPage extends React.Component {
    constructor(props) {
      super(props)
      this.toggleAddForm = this.toggleAddForm.bind(this)
      this.setSelectedUser = this.setSelectedUser.bind(this)
      this.setSelectedUserAction = this.setSelectedUserAction.bind(this)
      this.state = {
          addFormCollapse: false,
          selectedUser: {},
          selectedUserModify: false,
      }
    }

    toggleAddForm() {
      this.setState(state => ({ addFormCollapse: !state.addFormCollapse }))
    }

    setSelectedUser(user) {
      this.setState(state => ({ selectedUser: user }))
    }

    setSelectedUserAction(boo) {
      this.setState(state => ({ selectedUserModify: boo }))
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
                    <Card body>
                      <CardTitle>Selected User</CardTitle>
                      <CardText>
                          {this.state.selectedUser.username
                          ? (
                              <div>
                              {this.state.selectedUserModify
                               ? <ModifyUserForm user={this.state.selectedUser}/>
                               : <InfoUser user={this.state.selectedUser}/>
                              }
                              </div>
                          )
                          : "Click on Modify/Show Info"
                          }
                      </CardText>
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
						<tbody>
                            <UserItem 
                                user={{name: "Hrishikesh Barman", username: "geekodour", email: "asd"}}
                                setSelectedUser={this.setSelectedUser}
                                setSelectedUserAction={this.setSelectedUserAction}
                            />
                            <UserItem 
                                user={{name: "Debanga Barman", username: "posd"}}
                                setSelectedUser={this.setSelectedUser}
                                setSelectedUserAction={this.setSelectedUserAction}
                            />
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