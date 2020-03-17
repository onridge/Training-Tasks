import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import ElementList from "../../../../components/ElementList/ElementList";
import {debounce, throttle} from "./throttle-debounce";

export default function JSTask11() {
    return (
        <Layout>
            <div>
                <h3> Throttle - debounce </h3>
            </div>
            <ul>
                <ElementList description='throttle'>
                    <plaintext>
                        {throttle.toString()}
                    </plaintext>
                </ElementList>
                <ElementList description='debounce'>
                    <plaintext>
                        {debounce.toString()}
                    </plaintext>
                </ElementList>
            </ul>
        </Layout>
    )
}
