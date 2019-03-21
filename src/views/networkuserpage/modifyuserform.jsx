import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import groupnames from '../../radiusgroups.json'

class ModifyUserForm extends Component {

  render() {
    let user = this.props.user
    return (
                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" value={user.name} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="username" value={user.username} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={user.email} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="groups">Group</Label>
                    <Input type="select" name="select" id="groups">
                        {groupnames.map(g=>(<option key={g.groupname} value={g.groupname}>{g.name}</option>))}
                    </Input>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                       <Input type="checkbox" name="newpassword" /> Generate New Password
                    </Label>
                  </FormGroup>
                  <br/>
                  <br/>
                  <small>*Generated password will be mailed to user's email</small>
                  <br/>
                  <Button color="success">Register</Button>
                </Form>
    )
  }
}

export default ModifyUserForm;