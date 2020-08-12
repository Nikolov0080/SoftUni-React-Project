import React from 'react';
import Navigation from '../navigation/index';
import Footer from '../footer/footer'
import style from './pageLayout.module.css'
import Title from '../utils/title/title';
import '../../fire/fire'

const PageLayout =(props)=> {
   
        return (
            <div className={style.page_container}>
                <Navigation />
                <Title title={props.title} />
                <div className={style.inner_container}>
                    <div className={style.over_flow_div}>
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
}

export default PageLayout;