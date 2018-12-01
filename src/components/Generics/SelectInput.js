import React from 'react';

const SelectInput = ({options,name,label,onChange,labelClass,selectClass,parentClass,value,error,type}) => {
	return (
    <div className={'form-group '+parentClass}>
        <label for="category" className={labelClass}>{label}</label>
        <div className={selectClass}>
          <select id="category" className="form-control" onChange={onChange}  name={name} value={value}>
            {
              options.map((option)=>{
                return <option key={option.value} value={option.value}>{option.title}</option>
              })
            }
          </select>
        </div>
      </div>
		);
}



export default SelectInput;
