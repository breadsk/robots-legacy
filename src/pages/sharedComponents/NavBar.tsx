import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';

interface Props {
  handleSearch: () => void;
  handleChange: () => void;
  handleSearchKeyDown: () => void;
}


export const NavBar = ({ handleSearch , handleChange , handleSearchKeyDown }:Props) => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Mega Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <NavDropdown title="Sagas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Megaman Clasico</NavDropdown.Item>
              <NavDropdown.Item href="#">Megaman X</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Otras Sagas</NavDropdown.Item>
            </NavDropdown>            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Ingresa un valor"
              className="me-2"
              aria-label="Search"
              onChange={ handleChange }
              onKeyDown={ handleSearchKeyDown }
            />
            <Button 
              onClick={ handleSearch }
              variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}