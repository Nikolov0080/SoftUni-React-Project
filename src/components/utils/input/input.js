import React from 'react';

const Input = ({ id, label, name, type, placeholder, register, inputmode }) => {

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
            ></input>
        </div>
    )
}

export default Input;