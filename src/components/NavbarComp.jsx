import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown,} from 'react-bootstrap';
import CamRentLogo from '../assets/camrent.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 
import Form from 'react-bootstrap/Form';

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={CamRentLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Camrent
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Camera</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Microphone
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesseries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  See more...
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button>
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;