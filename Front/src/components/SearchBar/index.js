import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Form, FormGroup, ButtonGroup, Button } from 'reactstrap';
import InputField from '../InputField';

let SearchBar = (props) => {
  const { handleSubmit, pristine, submitting, reset } = props;
  return(
    <Container fluid={true}>
      <Form inline onSubmit={ handleSubmit }>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Field 
            id="date"
            type="date"
            name="date"
            component={InputField}
            placeholder="Date"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Field 
            id="issueNumber"
            type="text"
            name="issueNumber"
            component={InputField}
            placeholder="Issue Nbr"
          />
        </FormGroup>
        <ButtonGroup>
          <Button size="sm" color="primary" type='submit' disabled={pristine || submitting}>FILTER BY DATE</Button>
          <Button size="sm" color='primary' type='button' disabled={pristine || submitting} onClick={  reset }>RESET</Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

SearchBar = reduxForm({
  form: 'searchbar'
})(SearchBar);
export default SearchBar;