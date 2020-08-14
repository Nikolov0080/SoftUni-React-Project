import React from 'react';

const DropdownMenu = ({ register, id, label, name }) => {


    return (
        <div>
            <label id={id}>{label}</label>
            <select className='custom-select' name={name} ref={register}>
                <option value="Sofia">Sofia</option>
                <option value="Burgas">Burgas</option>
                <option value="Plovdiv">Plovdiv</option>
                <option value="Varna">Varna</option>
            </select>
        </div>

    )
}

export default DropdownMenu;