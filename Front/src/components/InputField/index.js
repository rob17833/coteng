import React from 'react';

const InputField = ({
   id,
   input,
   label,
   type,
   className,
   meta: { touched, error },
   
}) => (
   <React.Fragment>
     <label htmlFor={id} className="label-form">
       {label}
       <input {...input} type={type} id={id} 
className={className} />
     </label>
     {
       touched
       && error
       && <div className="color-error">{error}</div>}
   </React.Fragment>
);


export default InputField;