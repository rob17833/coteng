import React from 'react';
import './index.css';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, Container, Row, Col
}
  from 'reactstrap';
import InputField from '../InputField/index';
// import Today from '../Today';


let TimeRegForm = (props) => {
  const { handleSubmit, status, reset, pristine, submitting } = props;
  // console.log(initialValues);

  return (
    <Container fluid={true}>
      <Form onSubmit={handleSubmit} className={status}>
        <Row>
          <Col>
            <Field
              id="employee"
              type="text"
              name="employee_Id"
              component="input"
              className="form-control"
              placeholder="Employee"
            />
          </Col>
          <Col>
            <Field
              id="date"
              type="date"
              name="date"
              component="input"
              className="form-control"
              placeholder="Date"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Field
              id="startTime"
              type="time"
              name="startTime"
              component={InputField}
              className="form-control"
              placeholder="StartTime"
            />
          </Col>
          <Col>
            <Field
              id="endTime"
              type="time"
              name="endTime"
              component={InputField}
              className="form-control"
              placeholder="EndTime"
            />
          </Col>
          <Col>
            <Field
              id="customer"
              type="text"
              name="customer_Id"
              component={InputField}
              className="form-control"
              placeholder="Customer"
            />
          </Col>
          <Col>
            <Field
              id="invoiceCode"
              type="text"
              name="invoiceCode_Id"
              component={InputField}
              className="form-control"
              placeholder="InvoiceCode"
            />
          </Col>
          <Col>  
            <Field
              id="issueNumber"
              type="text"
              name="issueNumber_Id"
              component={InputField}
              className="form-control"
              placeholder="IssueNumber"
            />
          </Col>  
          <Col>  
            <Field
              id="issueName"
              type="text"
              name="issueName_Id"
              component={InputField}
              className="form-control"
              placeholder="IssueName"
            />
          </Col>
          <Col>
            <Field
              id="workType"
              type="text"
              name="workType_Id"
              component={InputField}
              className="form-control"
              placeholder="WorkType"
            />
          </Col>
          <Col>
            <Field
              id="ticketNumber"
              type="text"
              name="ticketNumber_Id"
              component={InputField}
              className="form-control"
              placeholder="TicketNumber"
            />
          </Col>
          <Col>
            <Field
              id="ticketCountry"
              type="text"
              name="ticketCountry_Id"
              component={InputField}
              className="form-control"
              placeholder="TicketCountry"
            />
          </Col>
          <Col>
            <Field
              id="description"
              type="text"
              name="description"
              component={InputField}
              className="form-control"
              placeholder="Description"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" type='submit' disabled={pristine || submitting}>SEND</Button>{' '}
            <Button color="primary" type='button' disabled={ pristine || submitting} onClick={ reset }>RESET</Button> 
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const validate = (values) => {
  const errors = {};
  // if (!values.employee_Id){
  //   errors.employee_Id = 'Employee is required';
  // }
  // if (!values.date){
  //   errors.date = 'Date is required';
  // }
  if (!values.startTime){
    errors.startTime = 'StartTime is required'
  }
  if (!values.endTime){
    errors.endTime = 'EndTime is required'
  } else {
    if (values.endTime<=values.startTime){
      errors.endTime = 'Incorrect value'
    }
  }
  if(!values.customer_Id){
    errors.customer_Id = 'Customer is required'
  }
  if(!values.invoiceCode_Id){
    errors.invoiceCode_Id = 'InvoiceCode is required'
  }
  if(!values.issueNumber_Id){
    errors.issueNumber_Id = 'IssueNumber is required'
  }
  if(!values.issueName_Id){
    errors.issueName_Id = 'IssueName is required'
  }
  if(!values.workType_Id){
    errors.workType_Id = 'WorkType is required'
  }
  if(!values.ticketCountry_Id){
    errors.ticketCountry_Id = 'TicketCountry is required'
  }
  if (!values.description){
    errors.description = 'Description is required'
  }

  return errors;
};



TimeRegForm = reduxForm({
  form: 'timereg',
  enableReinitialize: true,
  validate
})(TimeRegForm);
export default TimeRegForm;
