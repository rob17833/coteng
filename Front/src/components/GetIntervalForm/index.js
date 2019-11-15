import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
	Button,
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	ButtonGroup,
	Label
} from 'reactstrap';
import InputField from '../InputField';

let GetIntervalForm = (props) => {
	const { handleSubmit, reset, pristine, submitting } = props;
	return(
		<Container>
			<Form onSubmit={ handleSubmit }>
				<Row>
					<Col>
						<FormGroup>
							<Field
								id="startDate"
								type="date"
								name="startDate"
								component={InputField}
								placeholder="Start Date"
								/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Field
								id="endDate"
								type="date"
								name="endDate"
								component={InputField}
								placeholder="End Date"
							/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Field
								id="invoiceCode"
								type="text"
								name="invoiceCode"
								component={InputField}
								placeholder="Invoice Code"
							/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup tag="fieldset">
							<legend>Sorted by</legend>
							<FormGroup check>
								<Label check>
									<Field
										name="radio"
										type="radio"
										component="input"
										value="invoiceCode"
									/>
								{' '}Invoice Code
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Field
										name="radio"
										type="radio"
										component="input"
										value="issueNumber"
									/>
								{' '}Issue Number
								</Label>
							</FormGroup>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<ButtonGroup>
							<Button color="primary" type='submit' disabled={pristine || submitting}>FILTER BY DATE</Button>
							<Button color='primary' type='button' disabled={pristine || submitting} onClick={  reset }>RESET</Button>
						</ButtonGroup>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

const validate = (values) => {
	const errors = {};
	if (!values.startDate){
    errors.startDate = 'Start Date is required'
  }
	if (!values.endDate){
    errors.endDate = 'End Date is required'
	} else {
		if (values.endDate<values.startDate){
			errors.endDate = 'End Date must be bigger than Start Date'
		}
	}
	if (!values.invoiceCode){
    errors.invoiceCode = 'Invoice code is required'
  }
	return errors;
};

GetIntervalForm = reduxForm({
	form: 'interval',
	validate
})(GetIntervalForm);
export default GetIntervalForm;

