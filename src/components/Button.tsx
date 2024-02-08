import styles from './Button.module.css';
import { useState } from 'react';

function Button({ textButton, onMouseUpCallback, link }: { textButton: string; onMouseUpCallback?: () => void, link?: string }) {
    const btnText = textButton;

    const handleClick = () => {
        if (onMouseUpCallback) {
            onMouseUpCallback();
        }
    }

    return (
        <>
            {link ?
            <a href={link} style={{textDecoration: 'none'}}>

                <button
                    className={styles.r3btn}
                    onClick={handleClick}
                >
                    {btnText}
                </button>
            </a>:
            <button
                className={styles.r3btn}
                onClick={handleClick}
            >
                {btnText}
            </button>
            }
        </>
    );
}

export default Button;
