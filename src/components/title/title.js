import React, { Component } from 'react';
import style from './title.module.css';


class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        };
    }

    render() {
        return (
            <div className={style.sidebar_container}>

                <h1 className={style.helloMessage}>{this.state.title}</h1>
            </div>
        )
    }

}

export default Title;