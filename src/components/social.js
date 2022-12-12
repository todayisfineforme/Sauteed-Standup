import '../style/social.css';
import instagramLogo from '../icons/instagram.svg'
import facebookLogo from '../icons/facebook.svg'
import tiktokLogo from '../icons/tiktok.svg'
import { Container, Row, Col, Image } from 'react-bootstrap';

function Social(props){
    return(
        <Container className={props.containerSpace} fluid>
            <Row className={props.space +" justify-content-center"}>
                <Col xs={{span:3}}>
                    <a href="https://www.instagram.com/sauteedstandup/" rel="noreferrer" target="_blank"><Image src={instagramLogo} fluid/></a>
                </Col>
                <Col xs={{span:3}}>
                    <a href="https://www.tiktok.com/@sauteedstandup" rel="noreferrer" target="_blank"><Image src={tiktokLogo} fluid/></a>
                </Col>
                <Col xs={{span:3}}>
                    <a href="https://www.facebook.com/sauteedstandup/" rel="noreferrer" target="_blank"><Image src={facebookLogo} fluid/></a>
                </Col>
            </Row>
        </Container>
    );
}

export default Social;