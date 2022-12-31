import React from 'react';
import '../style/Landing.css';
import logo from '../images/Full Logo.svg';
import Welcome from './Welcome.js';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import Tickets from './tickets.js';
import Social from './social.js';

function Landing() {

    const rowMargin = "my-1";
    const containerMargin = "mb-4";
    const bottomMargin = "";

  return (
    <Container  className="landing-container" fluid>
        <Row>
            <Col className="landing-menu d-flex align-items-center" lg={{span: 5, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order:2}}>
                <Container fluid>
                    <Welcome rowSpace={rowMargin} containerSpace={containerMargin} />
                    <Tickets rowSpace={rowMargin} containerSpace={containerMargin} />
                    <Social rowSpace={rowMargin} containerSpace={containerMargin} />
                </Container>
            </Col>
            <Col lg={{span: 7, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order:1}}>
                <Row className="justify-content-center">
                    <Image src={logo} alt="Sauteed Standup Logo" className='landing-logo'/> 
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default Landing;