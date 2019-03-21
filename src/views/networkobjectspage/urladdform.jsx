import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class UrlAddForm extends Component {

  render() {
    return (
        <Collapse className="fullwidth mt-3" isOpen={this.props.collapse}>
                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Facebook's Homepage" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="url">URL</Label>
                    <Input type="url" name="url" id="url" placeholder="https://facebook.com" />
                  </FormGroup>
                  <Button color="success">Create URL</Button>
                </Form>
        </Collapse>
    )
  }
}

export default UrlAddForm;