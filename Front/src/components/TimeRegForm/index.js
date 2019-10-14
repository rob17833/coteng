import React from 'react';
import './index.css';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, Container, Row, Col, Alert,
}
  from 'reactstrap';
import InputField from '../InputField/index';


let TimeRegForm = (props) => {
  const { handleSubmit, err, success, reset, pristine, submitting } = props;
  return (
    <Container fluid={true}>
      <Form onSubmit={handleSubmit} className="form">
        <Alert color='danger' isOpen={err}>Failed</Alert>
        <Alert color='success' isOpen={success}>Database has been updated successfully !</Alert>
        <Row noGutters={true}>
          <Col>
            <Field
              id="employee"
              type="text"
              name="employee_Id"
              component={InputField}
              className="form-control"
              placeholder="Employee"
            />
          </Col>
          <Col>
            <Field
              id="date"
              type="date"
              name="date"
              component={InputField}
              className="form-control"
              placeholder="Date"
            />
          </Col>
        </Row>
        <Row noGutters={true}>
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
          <Button type='submit' disabled={submitting}>SEND</Button>
          <Button type='button' disabled={ pristine || submitting} onClick={reset}>RESET</Button> 
        </Row>
      </Form>
    </Container>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.employee_Id){
    errors.employee_Id = 'Employee is required';
  }
  if (!values.date){
    errors.date = 'Date is required';
  }
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
  validate
})(TimeRegForm);
export default TimeRegForm;
