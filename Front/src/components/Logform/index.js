import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Container, Row, Col, Button, Label, FormGroup, Alert } from 'reactstrap';
import InputField from '../InputField/index';
import './index.css';


let Logform = props => {
  const { handleLogin, err } = props;
  return (
    <Container>
      <h3>Login Page</h3>
      <Alert color='danger' isOpen= { err }>Failed</Alert>
      <Form onSubmit={ handleLogin } className="form">
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Field
                id="username"
                name="username"
                component={InputField}
                type="text"
                placeholder="Username"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Field
                id="password" 
                name="password" 
                component={InputField} 
                type="password"
                placeholder="Password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Enter</Button>
      </Form>
    </Container>
  )
};

//Validations
const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'username is required';
  }

  if (!values.password) {
    errors.password = 'password is required';
  }

  return errors;
};

Logform = reduxForm({
  // a unique name for the form
  form: 'login',
  validate,
})(Logform)

export default Logform;