import React from 'react';
import Layout from '../../components/layout/index';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../UI/Input';

const Signup = (props) => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: '50px' }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                   <Input
                   label="First Name"
                   placecholder="Enter first name"
                   value=""
                   type="text"
                   onChange={()=>{}}
                   />
                  </Col>
                  <Col md={6}>
                  <Input
                   label="Last Name"
                   placecholder="Enter Last name"
                   value=""
                   type="text"
                   onChange={()=>{}}
                   />
                  </Col>
                </Row>
                <Input
                   label="Email"
                   placecholder="Enter Email"
                   value=""
                   type="email"
                   onChange={()=>{}}
                   />
                 <Input
                   label="Password"
                   placecholder="Enter Password"
                   value=""
                   type="password"
                   onChange={()=>{}}
                   />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Signup;
