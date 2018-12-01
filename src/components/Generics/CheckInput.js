import React from 'react';

const CheckInput = ({name,label,onChange,labelClass,valueClass,parentClass,value,error}) => {
	return (
    <div className={"form-group "+parentClass}>
      <label className={labelClass} htmlFor={name}>{label}</label>
      <div className={valueClass}>
        <input
          style={{marginTop:'5px'}}
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
        />

      </div>
    </div>
		);
}



export default CheckInput;
