import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.css';

export default function Layout({ children }) {
    return (
        <div>
            <div className={styles.button}>
                <Link to='/'>
                    <button>Back</button>
                </Link>
            </div>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}