import React, { Component } from 'react';



const Input = ({ id, label, name, type, placeholder,onChange }) => {



    const sendData = (event) => {
      return  onChange(event.target.value)
    }

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
                onChange={sendData}
            ></input>
        </div>
    )
}

export default Input;