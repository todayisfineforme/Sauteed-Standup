import { Container, Row, Col } from 'react-bootstrap';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';
import tiktokLogo from '../icons/tiktok.svg';

function Social(props) {
  return (
    <Container className={props.containerSpace} fluid>
      <Row className={`${props.space} justify-content-center`}>
        <Col xs={3}>
          <a href="https://www.instagram.com/sauteedstandup/" rel="noreferrer" target="_blank">
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
        </Col>
        <Col xs={3}>
          <a href="https://www.tiktok.com/@sauteedstandup" rel="noreferrer" target="_blank">
            <img src={tiktokLogo} alt="TikTok logo" />
          </a>
        </Col>
        <Col xs={3}>
          <a href="https://www.facebook.com/sauteedstandup/" rel="noreferrer" target="_blank">
            <img src={facebookLogo} alt="Facebook logo" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Social;
