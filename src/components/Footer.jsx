import { Container, Row, Col } from 'react-bootstrap';
import github from '../assets/github.jpg';
import apps from '../assets/apps.jpg';
import stack from '../assets/stack.jpg';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="text-center">
          <Col>
            <a href="https://github.com/CamBC-Lab">
              <img src={github} className="img-fluid" style={{ width: 100, height: 100 }} alt="GitHub" />
            </a>
          </Col>
          <Col>
            <a href="">
              <img src={apps} className="img-fluid" style={{ width: 100, height: 100 }} alt="Apps" />
            </a>
          </Col>
          <Col>
            <a href="">
              <img src={stack} className="img-fluid" style={{ width: 100, height: 100 }} alt="Stack" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;