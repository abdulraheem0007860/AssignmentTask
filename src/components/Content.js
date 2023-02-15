import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '@mui/material';
function Content() {
  return (
    <Container>
    <Row>
      <Col sm={4}><Card/></Col>
      
      <Col sm={4}><Card/></Col>
      <Col sm={4}><Card/></Col>
    </Row>
    <Row>
      <Col></Col>
    </Row>
    </Container>
  )
}

export default Content
