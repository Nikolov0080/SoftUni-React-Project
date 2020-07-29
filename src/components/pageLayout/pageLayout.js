import React, { Component } from 'react';
import Navigation from '../navigation/index';
import Footer from '../footer/footer';
import style from './pageLayout.module.css'
import Title from '../title/title';

class PageLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        }
    }
    render() {
        return (

            <div className={style.page_container}>
                <Navigation />
                <Title title={this.state.title} />

                <div className={style.inner_container}>

                    <div className={style.over_flow_div}>

                        {this.props.children}

                    </div>

                </div>

                <Footer />

            </div>
        )
    }
}

export default PageLayout;