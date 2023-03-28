import * as React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { ReactElement } from "react";
import styles from './Layout.module.css';
import { Footer } from "../Footer/Footer";

type Props = {
    children: ReactElement;
};

export function Layout(props: Props) {
    return (
        <div className={styles.container}>
            <Navbar />
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}