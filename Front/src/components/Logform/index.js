import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Container, Button, Label, FormGroup, Alert } from 'reactstrap';
import InputField from '../InputField/index';
import './index.css';


let Logform = props => {
  const { handleSubmit, err } = props;
  return (
    <Container>
      <h3>Login Page</h3>
      <Alert color='danger' isOpen= { err }>Incorrect Username and/or Password!</Alert>
      <Form onSubmit={ handleSubmit } className="form">
        <FormGroup>
          <Label for="username">Username</Label>
          <Field
            id="username"
            name="username"
            component={InputField}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Field
            id="password" 
            name="password" 
            component={InputField} 
            type="password"
          />
        </FormGroup>
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
  form: 'logform',
  validate,
  destroyOnUnmount : false,
  forceUnregisterOnUnmount: true
})(Logform)

export default Logform;