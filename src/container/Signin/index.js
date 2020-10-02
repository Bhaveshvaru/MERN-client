import React from 'react';
import Layout from '../../components/layout/index';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../UI/Input';
import { login } from '../../actions';
import {useDispatch} from "react-redux"

const Signin = (props) => {
  const dispatch = useDispatch()
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email: 'admin@gmail.com',
      password: '12345',
    };
    dispatch(login(user));
  };

  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: '50px' }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placecholder="Enter Email"
                  value=""
                  type="email"
                  onChange={() => {}}
                />
                <Input
                  label="Password"
                  placecholder="Enter Password"
                  value=""
                  type="password"
                  onChange={() => {}}
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

export default Signin;
