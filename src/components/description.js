import '../style/description.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Description(props){
    return(
        <Container className={props.containerSpace} fluid>
            <Row className={props.rowSpace}>
                <h1>Sauteed Standup</h1>
            </Row>
            <Row className={props.rowSpace}>
                <h2>Chicago's premiere cooking comedy competition show!</h2>
            </Row>
            <Row className={props.rowSpace}>
                <h2>Every first and third Sunday</h2>
            </Row>
            <Row className={props.rowSpace}>
                <h2>Lincoln Lodge</h2>
            </Row>
            <Row className={props.rowSpace}>
                <h2>7:30pm</h2>
            </Row>
        </Container>
    );
}

export default Description;