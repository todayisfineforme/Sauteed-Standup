import sauteeLogo from './images/Full Logo.svg';
import Social from "./components/social.js"
import Description from './components/description';
import Tickets from './components/tickets';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style/App.css';


function App() {
    const rowMargin = "my-2";
    const containerMargin = "mb-5";
    const bottomMargin = "";


    return (
        <Container style={{maxHeight:"100vh"}} fluid>
            <Row>
                <Col className="landing-menu d-flex align-items-center" lg={{span: 5, order:1}} md={{span:12, order: 2}} sm={{span:12, order: 2}} xs={{span:12, order:2}}>
                    <Container fluid>
                        <Description rowSpace={rowMargin} containerSpace={containerMargin} />
                        <Tickets rowSpace={rowMargin} containerSpace={containerMargin} />
                        <Social rowSpace={rowMargin} containerSpace={containerMargin} />
                    </Container>
                </Col>
                <Col lg={{span: 7, order:2}} md={{span:12, order: 1}} sm={{span:12, order: 1}} xs={{span:12, order:1}}>
                    <Row className="justify-content-center">
                        <Image src={sauteeLogo} alt="Sauteed Standup Logo" style={{maxHeight:"100vh"}} fluid/> 
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
