import * as React from 'react';
import styles from './Footer.module.css';

type Props = {

};

export function Footer(props: Props) {
    return (
        <div className={styles.footer}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Dennis A. Boanini</a>.
        </div>
    );
};