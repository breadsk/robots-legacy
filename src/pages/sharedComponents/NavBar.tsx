import { useEffect, useState , type KeyboardEvent } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';

interface Props {
  onQuery: (query:string) => void;  
}


export const NavBar = ({ onQuery }:Props) => {

  const [ query , setQuery ] = useState('');

  useEffect(()=> {
    const timeOutId = setTimeout(()=> {
      onQuery(query);
     },2000)

     return () => {
       clearTimeout(timeOutId);
     }

  },[query,onQuery])

  const handleSearch = () => {
    onQuery(query)
  }

  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
      event.preventDefault();
      handleSearch();
    }
  }

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
              value={query}
              onChange={ (event)=> {
                setQuery(event.target.value)
              } }
              onKeyDown={ handleKeyDown }
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