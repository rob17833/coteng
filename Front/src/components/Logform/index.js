import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import SubmitForm from '../SubmitForm/index';
import { Form, FormGroup, Container, Row, Col } from 'reactstrap';
import InputField from '../InputField/index';

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched && error && <span>{error}</span>}
//     </div>
//   </div>
// )

// check if const wouldn't be more suitable
let Logform = props => {
  const { error, handleSubmit } = props;
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="username">username</label>
              <Field
                id="username"
                name="username"
                component={InputField}
                type="text" />
              <label htmlFor="password">password</label>
              <Field
                id="password" 
                name="password" 
                component={InputField} 
                type="password"
              />
              {error && <strong>{error}</strong>}
            </FormGroup>
            <button type="submit">Submit</button>
          </Form>
        </Col>
      </Row>
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