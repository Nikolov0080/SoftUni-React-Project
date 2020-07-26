import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <footer>
                    <div>
                        <a href="https://coreui.io">Footer</a>
                        <span>&copy; Footer.</span>
                    </div>
                    <div >
                        <span>Powered by</span>
                        <a href="#sdf">Footer</a>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer;
