import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import { NetworkUsage,
         OnlineUsers,
         Classes,
         Networks,
         Urls,
         Vlans,
       } from '../../components/dashboard-components';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={6} lg={8}>
                        <NetworkUsage />
                    </Col>
                    <Col sm={6} lg={4}>
                        <Classes />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <OnlineUsers />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={4}>
                        <Networks />
                    </Col>
                    <Col sm={6} lg={4}>
                        <Vlans />
                    </Col>
                    <Col sm={6} lg={4}>
                        <Urls />
                    </Col>
                </Row>
            </div>
        );

    }
}

export default Home;