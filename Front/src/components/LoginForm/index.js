import React from 'react';
import 'index.css';
import {reduxForm, Field } from 'redux-form';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Form, Button, FormGroup, Container, Row, Col, Alert, NavLink
} from 'reactstrap';


let LogInForm = (props) => {
    const { handleSubmit, erreur } = props;
    return (
      <Container>
        <Row>
          <Col xs={{ size: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Alert color="danger" isOpen={erreur}>Login Failed</Alert>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  component={InputField}
                  placeholder="E-mail"
                  className="form-control"
                />
              </FormGroup>
              <Field
                id="password"
                type="password"
                name="password"
                component={InputField}
                placeholder="Password"
                className="form-control"
              />
              <Button color="primary" size="lg" active type="submit"
                block>Sign in
              </Button>
              <NavLink to="/signupform" tag={RRNavLink}
                className="lien">Your first registration
              </NavLink>
            </Form>
          </Col>
        </Row>
      </Container>
    );
 };
 
 // validation des entrees:
 const validate = (values) => {
    const errors = {};
 
    if (!values.email) {
      errors.email = 'email is required';
    } else if (!/^.+@.+$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
 
    if (!values.password) {
      errors.password = 'password is required';
    }
 
    return errors;
 };
 
 LogInForm = reduxForm({
    form: 'LogInForm',
    validate,
 })(LogInForm);
 
 export default LogInForm;