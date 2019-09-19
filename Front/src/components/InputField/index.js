import React from 'react';
import './index.css';

const InputField = ({
   id,
   input,
   label,
   type,
   className,
   meta: { touched, error },
   placeholder,
   
}) => (
   <React.Fragment>
     <label htmlFor={id} className="label-form">
       {label}
       <input {...input} type={type} id={id} placeholder={placeholder}
className={className} />
     </label>
     {
       touched
       && error
       && <div className="error">{error}</div>}
   </React.Fragment>
);


export default InputField;