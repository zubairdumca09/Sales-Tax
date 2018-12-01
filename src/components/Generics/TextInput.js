import React from 'react';

const TextInput = ({name,label,onChange,placeholder,labelClass,valueClass,parentClass,value,error,type}) => {
	let wrapperClass = 'form-group';
	if(error && error.length > 0){
		wrapperClass += " "+'has-error';
	}
	return (
			<div className={wrapperClass+" "+parentClass}>
				<label className={labelClass} htmlFor={name}>{label}</label>
				<div className={valueClass}>
					<input
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						className='form-control'/>
					{error && <div className="alert alert-danger">{error}</div>}
				</div>
			</div>
		);
}



export default TextInput;
