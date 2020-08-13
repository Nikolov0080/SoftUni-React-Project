import React from 'react';


const DropdownMenu = (onChange) => {

    const f = (a) => {
        onChange(a)
    }

    return (
        <select onChange={(val) => f(val)}>
            <option value="Grapefruit">Not working yet</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    )
}

export default DropdownMenu;