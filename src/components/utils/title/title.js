import React from 'react';
import style from './title.module.css';

const Title = (props) => {

    return (
        <div className={style.sidebar_container}>
            <h1 className={style.helloMessage}>{props.title}</h1>
        </div>
    )
}

export default Title;