import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';



class PolicyPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = { }
    }

    render() {
        return (
            <div>
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardHeader>Access Policies</CardHeader>
                      <CardBody>
                        <CardText>
                            New policies are better off added/removed directly from the FMC UI,
                            As policies are subject to the network design and policies the
                            inistitution follows.
                            <br/>
                            <br/>
                            But you can still add/remove rules.
                        </CardText>
                      </CardBody>
                      <CardFooter>Contact your systems admin if you want to know more about this</CardFooter>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardHeader tag="h5">Access Policy List</CardHeader>
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </div>
        );

    }
}

export default PolicyPage;