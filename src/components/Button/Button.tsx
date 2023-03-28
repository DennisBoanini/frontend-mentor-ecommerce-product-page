import * as React from 'react';
import styles from './Button.module.css';
import { Cart } from "../../assets/icons";

type Props = {
    text: string;
    icon?: string;
    onClickHandler: () => void;
};

export default function Button(props: Props) {
    return (
        <button type={"button"} className={styles.button} onClick={props.onClickHandler}>
            {props.icon && (
                <Cart color={'white'}/>
            )}
            {props.text}
        </button>
    );
}