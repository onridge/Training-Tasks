import React from 'react';
import Layout from '../../../components/Layout/Layout';
import styles from './TriangleCss.css';

export default function TriangleCss() {
    return (
        <Layout>
            <div>
                <h3> Как нарисовать треугольник на css? </h3>
            </div>
            <div className={styles.triangle}></div>
        </Layout>
    )
}
