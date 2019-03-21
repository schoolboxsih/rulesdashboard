import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class InfoUser extends Component {

  render() {
    let user = this.props.user
    return (
        <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.username}</p>
        <p>{user.group}</p>
        </div>
    )
  }
}

export default InfoUser;