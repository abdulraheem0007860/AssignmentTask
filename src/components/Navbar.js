
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample({onPress}) {
  return (
    <Navbar collapseOnSelect expand="lg" > 
      <Container>
        <Navbar.Brand href="#home"> 
        <img src="Assets/logo.png" alt="" />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
     
          </Nav>
          <Nav>
         

           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;