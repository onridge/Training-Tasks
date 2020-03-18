import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import { rotateArray } from "./rotateArray";

export default function JSTask12() {
    return (
        <Layout>
            <div>
                <h3> Rotate array </h3>
            </div>
            <plaintext> {rotateArray.toString()} </plaintext>
        </Layout>
    )
}
