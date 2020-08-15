import React from 'react';

const Input = ({ id, label, name, type, placeholder, register,onChange }) => {

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
                ref={register}
                onChange={onChange}
            ></input>
        </div>
    )
}

export default Input;