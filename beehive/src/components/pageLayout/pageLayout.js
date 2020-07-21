import React, { Component } from 'react';
import Navigation from '../navigation/index';
import Footer from '../footer/footer';
import style from './pageLayout.module.css'
import Sidebar from '../sidebar/sidebar';

class PageLayout extends Component {
  

    render() {
        return (
            <div className={style.page_container}>

                <Navigation />

                <div className={style.inner_container}>
                    <Sidebar />
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