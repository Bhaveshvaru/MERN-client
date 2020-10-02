import React, { useState } from 'react';
import Layout from '../../components/layout/index';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../UI/Input';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
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
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value) }
                />
                <Input
                  label="Password"
                  placecholder="Enter Password"
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setPasssword(e.target.value);
                  }}
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
