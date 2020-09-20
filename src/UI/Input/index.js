import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Input = (props) => {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placecholder}
          value={props.value}
          onChange={props.onChange}
        />
        <Form.Text className="text-muted">{props.erorMessage}</Form.Text>
      </Form.Group>
    </div>
  );
};

export default Input;
