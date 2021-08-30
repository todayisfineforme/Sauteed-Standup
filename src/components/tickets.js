import '../style/tickets.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


function Tickets(props){
    return(
        <Container className={props.containerSpace} fluid>
            <Row className={props.rowSpace}>
                <h1>Next Show is:</h1>
            </Row>
            <Row className={props.rowSpace}>
                <Button variant="outline-light" size="lg" href="https://www.simpletix.com/e/sauteed-standup-tickets-77571" target="_blank"><h1>Sunday <span>September 5th</span></h1></Button>
            </Row>
        </Container>
    );
}

export default Tickets