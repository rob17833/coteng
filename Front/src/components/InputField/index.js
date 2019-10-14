import React from 'react';
import './index.css';
import { Input, Label } from 'reactstrap';

const InputField = ({
	id,
	input,
	label,
	type,
	className,
	meta: { touched, error, warning },
	placeholder,

}) => (
		<React.Fragment>
			<Label htmlFor={id} className="label-form">
				{label}
			</Label>
			<Input bsSize="sm" {...input} type={type} id={id} placeholder={placeholder}
				className={className} />
			{
				touched
				&& ((error
				&& <div className="error">{error}</div>)||(warning && <span>{warning}</span>))}
		</React.Fragment>
	);


export default InputField;