import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import groupnames from '../../radiusgroups.json'

class AddForm extends Component {

  render() {
    return (
        <Collapse className="fullwidth mt-3" isOpen={this.props.collapse}>
                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Hrishikesh Barman" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="username" placeholder="geekodour" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="hrishikeshbman@gmail.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="groups">Group</Label>
                    <Input type="select" name="select" id="groups">
                        {groupnames.map(g=>(<option key={g.groupname} value={g.groupname}>{g.name}</option>))}
                    </Input>
                  </FormGroup>
                  <small>*password will be automatically generated</small>
                  <br/>
                  <Button color="success">Register</Button>
                </Form>
        </Collapse>
    )
  }
}

export default AddForm;
// which group
// group should be a list

