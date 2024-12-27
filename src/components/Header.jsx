import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Branden Camilo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              About Me
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio"
              className={location.pathname === '/portfolio' ? 'active' : ''}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/resume"
              className={location.pathname === '/resume' ? 'active' : ''}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;