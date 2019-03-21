import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class VlanAddForm extends Component {

  render() {
    return (
        <Collapse className="fullwidth mt-3" isOpen={this.props.collapse}>
                <Form>
                  <FormGroup>
                    <Label for="name">Name of VLAN</Label>
                    <Input type="name" name="name" id="name" placeholder="Guest VLAN" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="starttag">Start Tag</Label>
                    <Input type="number" name="starttag" id="starttag" placeholder="200" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="endtag">Start Tag</Label>
                    <Input type="number" name="endtag" id="endtag" placeholder="300" />
                  </FormGroup>
                  <Button color="success">Create VLAN</Button>
                </Form>
        </Collapse>
    )
  }
}

export default VlanAddForm;