import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class NetworkAddForm extends Component {

  render() {
    return (
        <Collapse className="fullwidth mt-3" isOpen={this.props.collapse}>
                <Form>
                  <FormGroup>
                    <Label for="name">Name of Network</Label>
                    <Input type="name" name="name" id="name" placeholder="Lobby WiFi" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="network">Network (CIDR)</Label>
                    <Input type="text" name="network" id="network" placeholder="10.0.1.0/32" />
                  </FormGroup>
                  <Button color="success">Create Network</Button>
                </Form>
        </Collapse>
    )
  }
}

export default NetworkAddForm;

