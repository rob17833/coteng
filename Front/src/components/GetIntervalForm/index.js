import React from 'react';
import { reduxForm, Field } from 'redux-form';

import {
	Button,
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	ButtonGroup
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
    errors.startDate = 'StartDate is required'
  }
	if (!values.startDate){
    errors.startDate = 'StartDate is required'
	}
	return errors;
};

GetIntervalForm = reduxForm({
	form: 'interval',
	validate
})(GetIntervalForm);
export default GetIntervalForm;

